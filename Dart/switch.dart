void main() {
  String animal = 'tiger';
  switch(animal) {
    case 'tiger':
      print('$animal is a tigger');
      continue alsoCat;
    case 'dog':
      print('$animal is a dog');
      break;
    alsoCat:
    case 'cat':
      print('$animal is a cat');
      break;
    default:
      print('$animal is not an animal');
      break;
  }
}