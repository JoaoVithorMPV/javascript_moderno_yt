function* cores() {
  yield "vermelho";
  yield "amarelo";
  yield "verde";
}

const itc = cores();
console.log(itc);

function* cores2() {
  yield "vermelho2";
  yield "amarelo2";
  yield "verde2";
}

const itc2 = cores2();
console.log(itc2.next().value);
console.log(itc);
console.log(itc2.next().value);
console.log(itc2.next().value);
console.log(itc2.next().value);

console.log("espaco");

function* perguntas() {
  let nome = yield "Qual o seu nome";
  let esporte = yield "Qual seu esporte favorito?";
  return "O seu nome é " + nome + ", seu esporte favorito é " + esporte;
}

const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next("joao").value);
console.log(itp.next("volei").value);

console.log("espaco");

function* contador() {
  let i = 0;
  while (true) {
    yield i++;
    if (i > 5) {
      break;
    }
  }
}

const itc3 = contador();
for (let c of itc3) {
  console.log(c);
}
