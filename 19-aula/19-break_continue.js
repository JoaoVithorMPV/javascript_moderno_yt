let n = 0;
let n2 = 1000;
let pares = 0;
/*
while (n < n2) {
  console.log("testando" + n);
  if (n > 10) {
    break;
  }
  n++;
}
*/
for (let i = n; i < n2; i++) {
  if (i % 2 == 0) {
    pares++;
  }
}

let n3 = 0;
let n4 = 500;
let pares2 = 0;

console.log("Essa sequencia possui " + pares + " numeros pares");

for (let i = n3; i < n4; i++) {
  if (i % 2 == 0) {
    continue;
  }
  pares2++;
}

console.log("Essa sequencia possui " + pares2 + " numeros pares");
