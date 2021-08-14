function fibonacci(n) {
  if (n < 3) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 1; i < 10; i += 1) {
  fibonacci(i);
}
