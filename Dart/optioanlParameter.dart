void main() {
  int addNumbers(int x, int y, [z]) {
    int sum = x + y;
    if(z != null) {
      sum += z as int;
    }
    return sum;
  }

  int addNumbersWithDefaultParameter(int x, int y, [int z = 5]) {
    int sum = x + y + z;
    return sum;
  }

  int addedNumbersWithoutOptionalParameter = addNumbers(1, 2);
  print('without optional parameter: addNumbers(1, 2) = $addedNumbersWithoutOptionalParameter');

  int addedNumbersWithOptionalParameter = addNumbers(1, 2, 3);
  print('without optional parameter: addNumbers(1, 2, 3) = $addedNumbersWithOptionalParameter');

  int addedNumbersWithDefaultParameter = addNumbersWithDefaultParameter(1, 2);
  print('without optional parameter: addNumbersWithDefaultParameter(1, 2) = $addedNumbersWithDefaultParameter');

  
}