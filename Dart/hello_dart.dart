void main() {
  List<String> greetings = [
    'World',
    'Mars',
    'Oregon',
    'Barry',
    'David Bowie',
  ];
  for ( var name in greetings) {
    helloDart(name);
  }
}

void helloDart(String name) {
  print('Hello, $name!');
}