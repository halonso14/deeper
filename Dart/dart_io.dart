import 'dart:io';

import 'hello_dart.dart';

void main() {
  stdout.writeln('Greet somebody');
  String input = stdin.readLineSync().toString();
  return helloDart(input);
}