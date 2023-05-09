let t1 = 10;
let t2 = 20;

if (t1 < t2 && t1 >= 11) {
  console.log("a variavel t1 é menor que t2 e t1 é maior ou igual a 10");
} else {
  console.log("a variavel t1 é maior que t2 e t1 não é maior ou igual a 10");
}

let t3 = 20;
let t4 = 50;

if (t3 < 100 && t4 < 100) {
  console.log("t3 e t4 são menores do que 100");
  if (t3 < 1000 && t4 < 1000) {
    console.log("t3 e t4 são menores do que 1000");
  }
}
