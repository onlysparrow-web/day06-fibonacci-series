let a, b, c, n;
a = 0;
b = 1;
n = prompt("Enter the n values of series", "");
console.log(+a);
console.log(+b);
for (let i = 1; i <= n; i++) {
  c = a + b;
  a = b;
  b = c;
  console.log(+c);
}
