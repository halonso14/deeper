# REFERENCE : https://lidron.tistory.com/44

import socketserver
import threading
HOST = "127.0.0.1"
PORT = 8888
lock = threading.Lock()


class UserManageer:
    def __init__(self):
        self.users = {}

    def add_user(self, user_name, conn, addr):
        if user_name in self.users:
            conn.send("user name already exist\n".encode())
            return None

        lock.acquire()
        self.users[user_name] = (conn, addr)
        lock.release()

        self.send_message_to_all("[{}] entered".format(user_name))
        print("--- current user : {} ---".format(len(self.users)))

        return user_name

    def remove_user(self, user_name):
        if user_name not in self.users:
            return

        lock.acquire()
        del self.users[user_name]
        lock.release()

        self.send_message_to_all('[{}] quit chatting'.format(user_name))
        print("--- current user : {} ---".format(len(self.users)))

    def message_handler(self, user_name, message):
        if message[0] != '/':
            self.send_message_to_all('[{}] {}'.format(user_name, message))
            return True
        if message.strip() == '/quit':
            self.remove_user(user_name)
            return False

    def send_message_to_all(self, message):
        for conn, addr in self.users.values():
            conn.send(message.encode())


class MyTCPHandler(socketserver.BaseRequestHandler):
    user_manager = UserManageer()

    def handle(self):
        print('[{}] is connected'.format(self.client_address[0]))
        try:
            user_name = self.register_username()
            message = self.request.recv(1024)
            while message:
                print(message.decode())
                if not self.user_manager.message_handler(user_name, message.decode()):
                    self.request.close()
                    break
                message = self.request.recv(1024)
        except Exception as e:
            print(e)

        print('[{}] disconnected'.format(self.client_address[0]))

    def register_username(self):
        while True:
            self.request.send('login ID : '.encode())
            user_name = self.request.recv(1024)
            user_name = user_name.decode().strip()
            if self.user_manager.add_user(user_name, self.request, self.client_address):
                return user_name


class ChattingServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    pass


def run_server():
    print('+++ start chatting server.')
    print('+++ PRESS Ctrl-c to quit.')
    try:
        server = ChattingServer((HOST, PORT), MyTCPHandler)
        server.serve_forever()
    except KeyboardInterrupt:
        print('--- terminating chatting server')
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    run_server()
