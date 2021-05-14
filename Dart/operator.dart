void main() {
  print('?? operator: if null, assigns value');
  const nullObjectAfterOperation = null ?? 'assigned';
  print('nullObjectAfterOperation = nullObject ?? "assigned" results in nullObjectAfterOperation = $nullObjectAfterOperation\n');

  print('??= operator: if not null re-assign value');
  print('notNullString ??= "newString" results in notNullString = "newSting"\n');
}