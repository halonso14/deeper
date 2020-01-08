from numpy.random import choice

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


class NumberRule:
    def __init__(self, game_digits, game_range):
        self.game_digits = game_digits
        self.game_range = game_range

    def __repr__(self):
        message = "NUMBER RULE\nchoose {} numbers from (0 ~ {})\n"
        return message.format(self.game_digits, self.game_range)

    @classmethod
    def validate_digits(cls, number):
        if int(number) < ZERO:
            print("input number should be greater than 0")
            return False
        return True

    @classmethod
    def validate_range(cls, number, digits):
        if int(number) < digits:
            print("input number should be greater than game_digits")
            return False
        return True


class BaseballNumber(NumberRule):
    def __init__(self, *game_numbers, game_digits=DEFAULT_DIGITS, game_range=DEFAULT_RANGE):
        super().__init__(game_digits, game_range)
        if game_numbers:
            self.ball_numbers = [(index, number) for index, number in enumerate(game_numbers)]
        else:
            self.ball_numbers = [(index, number)
                                 for index, number in enumerate(choice(self.game_range, self.game_digits, replace=False))]

    def __iter__(self):
        return iter(self.ball_numbers)

    def __repr__(self):
        message = "GAME NUMBERS\n"
        for _, num in self.ball_numbers:
            message += str(num) + " "
        return message.rstrip() + "\n"


class Player(NumberRule):
    def __init__(self, game_digits=DEFAULT_DIGITS, game_range=DEFAULT_RANGE, stamina=DEFAULT_OPPORTUNITY):
        super().__init__(game_digits, game_range)
        self.out_count = {"BALL": 0, "STRIKE": 0, "OUT": 0}
        self.stamina = stamina
        self.player_numbers = None

    def __repr__(self):
        return "PLAYER STATUS\n{} with {} stamina left\n".format(self.out_count, self.stamina)

    def player_at_bat(self, player_numbers):
        self.out_count["BALL"] = 0
        self.out_count["STRIKE"] = 0
        if player_numbers:
            self.player_numbers = BaseballNumber(*player_numbers, self.game_digits, self.game_range)
        else:
            print("Play random")
            self.player_numbers = BaseballNumber(game_digits=self.game_digits, game_range=self.game_range)


class Game(NumberRule):
    def __init__(self,
                 game_digits=DEFAULT_DIGITS,
                 game_range=DEFAULT_RANGE,
                 player_numbers=DEFAULT_PLAYERS,
                 innings=DEFAULT_INNINGS):
        super().__init__(game_digits, game_range)
        self.pitcher = BaseballNumber(game_digits=self.game_digits, game_range=self.game_range)

        self.on_play = True
        self.innings = innings
        self.player_list = {}
        print("welcome to number Baseball!")
        print(self)

    @classmethod
    def add_player(cls, player_list, player_id, player):
        player_list[player_id] = player
        return player_list

    @classmethod
    def get_player(cls, player_list, player_id):
        return player_list[player_id]

    @classmethod
    def remove_player(cls, player_list, player_id):
        if player_id not in player_list:
            return player_list
        del player_list[player_id]
        return player_list

    @classmethod
    def player_swing(cls, pitcher, player):
        tmp_player_numbers = player.player_numbers
        for player_num_pos, player_num in enumerate(tmp_player_numbers):
            for pitcher_num_pos, pitcher_num in enumerate(pitcher):
                if player_num == pitcher_num:
                    if player_num_pos == pitcher_num_pos:
                        player.out_count["STRIKE"] += 1
                    else:
                        player.out_count["BALL"] += 1
        if player.out_count["BALL"] == 0 and player.out_count["STRIKE"] == 0:
            player.out_count["OUT"] += 1
        player.stamina -= 1
        return player

    @classmethod
    def is_game_on(cls, player):
        if player.stamina == ZERO:
            print("LOSE, no stamina")
            return False
        if player.out_count["OUT"] == MAX_OUT_COUNT:
            print("LOSE, strike out")
            return False
        if player.out_count["STRIKE"] == DEFAULT_DIGITS:
            print("WIN, home run")
            return False
        return True

    def validate_number(self, tmp_numbers, new_number):
        if new_number < 0 or new_number > self.game_range:
            print("number is out of range")
            return False, tmp_numbers

        if tmp_numbers:
            if new_number in tmp_numbers:
                print("duplicated number")
                return False, tmp_numbers
        tmp_numbers.append(new_number)
        return True, tmp_numbers


if __name__ == "__main__":
    while GAME_ON:
        print("game rule setting\n")
        while True:
            try:
                game_digits = int(input("number of digits for number baseball: "))
                if Game.validate_digits(game_digits):
                    break
            except ValueError:
                print("input should be an integer")

        while True:
            try:
                game_range = int(input("range for number baseball( > {}): ".format(game_digits)))
                if Game.validate_range(game_range, game_digits):
                    break
            except ValueError:
                print("input should be an integer")
        print("rule set\n")
        game = Game(game_digits, game_range)
        pitcher = game.pitcher
        player_list = game.player_list

        print("player setting\n")
        player_1 = Player()
        # player_2 = Player()
        # player_3 = Player()
        game.add_player(player_list, "Adam", player_1)
        # game.add_player(player_list, "Brad", player_2)
        # game.add_player(player_list, "Charles", player_3)

        print("game on")
        while INNING_RESULT:
            for inning in range(game.innings):
                for player_id in player_list:
                    player = game.get_player(player_list, player_id)
                    player_balls = list()
                    target_ball = 0
                    while target_ball < game.game_digits:
                        try:
                            ball = int(input("choose {} number between 0 ~ {}: ".format(target_ball + 1, game_range)))
                            ball_quality, player_balls = game.validate_number(player_balls, ball)
                            if ball_quality:
                                target_ball += 1
                        except ValueError:
                            print("input should be an integer")
                    player.player_at_bat(player_balls)

                    player = Game.player_swing(pitcher, player)
                    print(player)
                    print(pitcher)

                    INNING_RESULT = Game.is_game_on(player)
        print("inning ended")
        GAME_ON = False
