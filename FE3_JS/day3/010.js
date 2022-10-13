function cal(a, b) {
  return a(10, 10) + b(10, 10);
}

cal(
  (a, b) => a + b,
  (a, b) => a * b
);
function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

function cal(a, b) {
  return a(10, 10) + b(10, 10);
}

cal(add, mul);
