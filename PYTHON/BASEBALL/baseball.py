from numpy.random import choice
from operator import add
import reprlib

MAX_STRIKE_COUNT = 3
MAX_OUT_COUNT = 3

DEFAULT_DIGITS = 3
DEFAULT_RANGE = 10
DEFAULT_INNINGS = 1
DEFAULT_PLAYERS = 1
DEFAULT_OPPORTUNITY = 6


class NumberRule:
    def __init__(self, game_digits, game_range):
        self.game_digits = game_digits
        self.game_range = game_range

    def __repr__(self):
        message = "NUMBER RULE\nchoose {} numbers from (1 ~ {})\n"
        return message.format(self.game_digits, self.game_range)


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
    def __init__(self, game_digits=DEFAULT_DIGITS, game_range=DEFAULT_RANGE, opportunity=DEFAULT_OPPORTUNITY):
        super().__init__(game_digits, game_range)
        self.out_count = {"BALL": 0, "STRIKE": 0, "OUT": 0}
        self.opportunity = opportunity
        self.player_numbers = None

    def player_swing(self, player_numbers):
        if player_numbers:
            self.player_numbers = BaseballNumber(player_numbers, self.game_digits, self.game_range)
        else:
            print("Play random")
            self.player_numbers = BaseballNumber(game_digits=self.game_digits, game_range=self.game_range)

    def __repr__(self):
        return "PLAYER STATUS\n{} with {} more opportunities\n".format(self.out_count, self.opportunity)


class Game(NumberRule):
    def __init__(self, game_digits=DEFAULT_DIGITS, game_range=DEFAULT_RANGE, player_numbers=DEFAULT_PLAYERS, innings=DEFAULT_INNINGS):
        super().__init__(game_digits, game_range)
        self._innings = innings
        self.on_play = True
        self.pitcher = BaseballNumber(game_digits=self.game_digits, game_range=self.game_range)
        self.player_list = []
        print("welcome to number Baseball")
        print("pitcher is ready to play")

    def __iter__(self):
        return iter(self.pitcher.game_numbers)

    def add_player(self, player_list, opportunitiy=3):
        player_list.append(Player(self.game_range, self.game_digits, opportunity=opportunitiy))

    def player_bet(self, player, picked_numbers):
        player.pick_numbers(picked_numbers)
        player.out_count = self.compare_numbers(player.numbers, player.out_count)
        player.opportunity_left -= 1

    def compare_numbers(self, player_numbers, result):
        result["BALL"] = 0
        result["STRIKE"] = 0

        tmp_player_numbers = player_numbers
        print(self.numbers, tmp_player_numbers)
        for player_num_pos, player_num in enumerate(tmp_player_numbers):
            for house_num_pos, house_num in enumerate(self.numbers):
                if player_num == house_num:
                    if player_num_pos == house_num_pos:
                        result["STRIKE"] += 1
                    else:
                        result["BALL"] += 1
        if result["BALL"] == 0 and result["STRIKE"] == 0:
            result["OUT"] += 1
        return result

    @classmethod
    def validate_picks(cls, picked_number, new_pick):
        if new_pick < 0 or new_pick > 9:
            print("is not one-digit number")
            return False, picked_number
        else:
            if new_pick in picked_number:
                print("duplicated number")
                return False, picked_number
            picked_number.append(new_pick)
            return True, picked_number


if __name__ == "__main__":
    game = Game()

    game.add_player(game.player_list)
    game.add_player(game.player_list)
    game.add_player(game.player_list)
    game.add_player(game.player_list)

    game_1 = BaseballNumber(1, 2, 3, 4, game_digits=4, game_range=10)
    game_2 = BaseballNumber()

    print(game)
    print(game_1)
    print(game_2)
