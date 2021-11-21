function test(n = 99) {
  debugger;
  if (n === 0) throw Error();
  test(n - 1);
}
test();
