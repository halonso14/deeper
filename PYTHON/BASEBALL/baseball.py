
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
        self._game_digits = game_digits
        self._game_range = game_range


class BaseballRule(NumberRule):
    def __init__(self, game_digits, game_range, innings=DEFAULT_INNINGS):
        super().__init__(game_digits, game_range)
        self._innings = innings

    def __repr__(self):
        pass


class BaseballNumber(NumberRule):
    def __init__(self, *picked_numbers, game_digits=DEFAULT_DIGITS, game_range=DEFAULT_RANGE):
        super().__init__(game_digits, game_range)
        if picked_numbers:
            self.numbers = [(index, number) for index, number in zip(range(game_digits), picked_numbers)]
        else:
            self.numbers = [(index, number)
                            for index, number in zip(range(game_digits), choice(game_range, game_digits, replace=False))]

    def __iter__(self):
        return iter(self.numbers)

    def __repr__(self):
        return_string = ''
        for numbers in self.numbers:
            return_string += str(numbers[1]) + ' '
        return return_string.rstrip()


class Player:
    def __init__(self, game_digits=DEFAULT_DIGITS, game_range=DEFAULT_RANGE, opportunities=DEFAULT_OPPORTUNITY):
        self.out_count = {"BALL": 0, "STRIKE": 0, "OUT": 0}
        self.opportunity_left = opportunities

    def player_bet(self, picked_numbers):
        if picked_numbers:
            self.numbers = BaseballNumber(picked_numbers)
        else:
            print("Play random")
            self.numbers = BaseballNumber()

    def __repr__(self):
        return_string = ''
        for numbers in self.numbers:
            return_string += str(numbers[1]) + ' '
        return return_string.rstrip()


class Game(BaseballRule):
    def __init__(self, game_digits=DEFAULT_DIGITS, game_range=DEFAULT_RANGE, player_numbers=DEFAULT_PLAYERS, innings=DEFAULT_INNINGS):
        super().__init__(game_digits, game_range, innings)
        self.on_play = True
        self.pitcher = BaseballNumber(game_digits=self._game_digits, game_range=self._game_range)
        self.player_list = []
        print("welcome to number Baseball")
        print("pitcher is ready to play")

    def __iter__(self):
        return iter(self.pitcher.numbers)

    def add_player(self, player_list, opportunities=3):
        player_list.append(Player(opportunities=opportunities))

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
    rule = BaseballRule(5, 10)
    number = BaseballNumber(game_digits=rule._game_digits)
    game = Game()

    game.add_player(game.player_list)
    game.add_player(game.player_list)
    game.add_player(game.player_list)
    game.add_player(game.player_list)

    game_1 = BaseballNumber(1, 2, 3, 4, game_digits=4, game_range=10)
    print(game_1)
    print(game_1._game_digits, game_1._game_range)
    game_2 = BaseballNumber()
    print(game_2)
    print(game_2._game_digits, game_2._game_range)
