from baseball import Game, Player
import socketserver
import threading


HOST = "127.0.0.1"
PORT = 8888
lock = threading.Lock()

GAME_ON = True
INNING_RESULT = True

MAX_STRIKE_COUNT = 3
MAX_OUT_COUNT = 3

DEFAULT_DIGITS = 3
DEFAULT_RANGE = 10
DEFAULT_INNINGS = 1
DEFAULT_PLAYERS = 1
DEFAULT_OPPORTUNITY = 6
ZERO = 0


class GamePlayer(Player):
    def __init__(self, conn, addr, game_digits=DEFAULT_DIGITS, game_range=DEFAULT_RANGE, stamina=DEFAULT_OPPORTUNITY):
        super().__init__(game_digits, game_range, stamina)
        self.conn = conn
        self.addr = addr


class GamerManager(Game):
    def __init__(self, game_digits=DEFAULT_DIGITS,
                 game_range=DEFAULT_RANGE,
                 player_numbers=DEFAULT_PLAYERS,
                 innings=DEFAULT_INNINGS):
        super().__init__(game_digits, game_range, player_numbers, innings)

    @classmethod
    def add_player(cls, player_list, player_id, player, conn, addr):
        if player_id in player_list:
            conn.send("user id already exist\n".encode())
            return player_list
        lock.acquire()
        player.conn = conn
        player.addr = addr
        player_list = super().add_player(player_list, player_id, player)
        lock.release()

        cls.send_message_to_all(player_list, "[{}] entered".format(player_id))
        print("--- current user : {} ---".format(len(player_list)))
        return player_list

    @classmethod
    def remove_player(cls, player_list, player_id):
        lock.acquire()
        player_list = super().remove_player(player_list, player_id)
        lock.release()

        cls.send_message_to_all(player_list, '[{}] quit chatting'.format(player_id))
        print("--- current user : {} ---".format(len(player_list)))
        return player_list

    @classmethod
    def message_handler(cls, player_list, player_id, message):
        if message[0] != '/':
            cls.send_message_to_all(player_list, '[{}] {}'.format(player_id, message))
            return player_list
        if message.strip() == '/quit':
            player_list = cls.remove_player(player_list, player_id)
            return player_list

    @classmethod
    def send_message_to_all(cls, player_list, message):
        for player_id in player_list.keys():
            player = player_list[player_id]
            player.conn.send(message.encode())


class BaseballTCPHandler(socketserver.BaseRequestHandler):
    game_manager = GamerManager()

    def handle(self):
        print('[{}] is connected'.format(self.client_address[0]))
        try:
            player_id = self.register_player()
            message = self.request.recv(1024)
            while message:
                print(message.decode())
                if not self.game_manager.message_handler(self.game_manager.player_list, player_id, message.decode()):
                    self.request.close()
                    break
                message = self.request.recv(1024)
        except Exception as e:
            print(e)

        print('[{}] disconnected'.format(self.client_address[0]))

    def register_player(self):
        while True:
            self.request.send('login ID : '.encode())
            player = GamePlayer(self.request, self.client_address)
            player_id = self.request.recv(1024)
            player_id = player_id.decode().strip()
            if self.game_manager.add_player(self.game_manager.player_list, player_id, player, self.request, self.client_address):
                return player_id


class ChattingServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    pass


def run_server():
    print('+++ start chatting server.')
    print('+++ PRESS Ctrl-c to quit.')
    try:
        server = ChattingServer((HOST, PORT), BaseballTCPHandler)
        server.serve_forever()
    except KeyboardInterrupt:
        print('--- terminating chatting server')
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    run_server()