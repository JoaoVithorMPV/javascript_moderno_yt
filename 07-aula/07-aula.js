let teste1, teste2, teste3;

teste1 = 10;
teste2 = 5;
teste3 = 2;

console.log(teste1 > teste2 && teste2 < teste3);
console.log(teste1 > teste2 || teste2 < teste3);
console.log(!(teste1 > teste2 || teste2 < teste3));

if (teste1 > teste2 && teste2 < teste3) {
  console.log("situacao verdadeiro");
} else {
  console.log("situacao falso");
}

if (teste1 > teste2 || teste2 < teste3) {
  console.log("situacao verdadeiro");
} else {
  console.log("situacao falso");
}

if (!(teste1 > teste2) || teste2 < teste3) {
  console.log("situacao verdadeiro");
} else {
  console.log("situacao falso");
}
