function teste(t1) {
  console.log(t1);
}

teste("teste");
teste("teste numero 2");
teste(3);

function teste2(t1, t2) {
  console.log(t1 + t2);
}

teste2("teste com apenas um parametro do tipo string");
teste2(1);
teste2(
  "teste com dois parametros do tipo string (1) - ",
  "teste com dois parametros do tipo string (2)"
);
teste2(10, 20);

function teste3(n1 = 0, n2 = 0) {
  console.log(n1 + n2);
}

teste3(10);

function teste4(n1 = 0, n2 = 0) {
  return n1 + n2;
}

teste4(10, 10); //nada será exibido, pois não há algo chamando sua exibição, apenas sua execução
console.log(teste4(10, 10)); //já nesse teste apropria chamada da função ta chamando sua execução no console

function teste5(n1 = 0, n2 = 0) {
  let res = n1 + n2;
  return res;
}

let resultadoteste5 = teste5(25, 3);
console.log(resultadoteste5);

const teste_valorpadrao = 27;

function teste6(n1 = teste_valorpadrao, n2 = teste_valorpadrao) {
  let res = n1 + n2;
  return res;
}

let resultadoteste6 = teste6();
console.log(resultadoteste6);

let valor = 10;

console.log(valor);

function teste7(t) {
  return valor + t;
}

valor = teste7(15);
console.log(valor);

valor = teste7(3);
console.log(valor);

console.log("espaço");

let valor2 = 11;

console.log(valor2);

function teste8(t) {
  valor2 += t;
}

teste8(15);
console.log(valor2);

teste8(3);
console.log(valor2);

/*
let valor = 10;

console.log(valor);

function teste7(t) {
  return valor + t;
}

console.log(teste7(5));
*/
