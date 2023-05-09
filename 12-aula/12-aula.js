/*
let teste1 = { nome: "bruno", energia: 100, vidas: 5 };
let teste2 = { nome: "bruno", energia: 100, vidas: 5, magia: 150 };
let teste3 = { ...teste1, ...teste2 };

console.log(teste3);

let teste4 = { nome: "joao", energia: 100, vidas: 5 };
let teste5 = { nome: "joao", energia: 100, vidas: 5, magia: 150 };
let teste6 = { teste4, teste5 };

console.log(teste6);

let n1 = { idade: 10 };
let n2 = { dinheiro: 30 };
let n3 = { ...n1, ...n2 };

console.log(n3);
*/

/*
let variavelteste = (a, b, c) => {
  return a + b + c;
};

console.log(variavelteste(1, 4, 6));

let testenumero2 = (t1, t2, t3) => {
  return t1 - t2 * t3;
};

console.log(testenumero2(23, 10, 8));

//teste numero sem spread
let testenumero3 = (a1, a2, a3) => {
  return a1 - a2 * a3;
};

let valores1 = [10, 20, 30];

console.log(testenumero3(valores1)); 
//ele "buga", pois ele tenta atribuir todos os valores de "valores1" para 
//a primeira varialvel, no caso "a1" 

//teste numero com spread
let testenumero4 = (a1, a2, a3) => {
  return a1 - a2 * a3;
};

let valores2 = [10, 20, 30];

console.log(testenumero3(...valores2)); //Já com o spread ele "espalha" e 
//distribui um valor para cada variavel

*/

const domdiv1 = document.getElementsByTagName("div");
const domdiv2 = { ...document.getElementsByTagName("div") }; //nao esar {}
const domdiv3 = [...document.getElementsByTagName("div")]; //usar []

domdiv3.forEach((element) => {
  element.innerHTML = "teste";
});

domdiv3.forEach((element) => {
  console.log(element);
});

console.log(domdiv1);
console.log(domdiv2);
console.log(domdiv3);
