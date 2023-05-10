// const teste = ["Overwatch", "Rainbow six", "Gta V"];

// teste.map((el, i) => {
//   console.log("Jogo: " + el + " - posição: " + i);
// });

// const teste2 = ["Overwatch2", "Rainbow six2", "Gta V2"];

// let t = teste2.map((el, i) => {
//   return el;
// });

// console.log(t);

// const teste3 = ["Overwatch3", "Rainbow six3", "Gta V3"];

// let t2 = teste3.map((el, i) => {
//   return "meu jogo favorito é: " + el;
// });

// console.log(t2);

// let t = document.getElementsByTagName("div");
// t = [...t];
// t.map((e, i) => {
//   e.innerHTML = "teste";
//   console.log(e.innerHTML);
// });

const teste4 = (e) => parseInt(e);

let num = ["1", "2", "3", "4"].map(teste4);
console.log(num);

const teste5 = (e) => e * 2;

let num2 = ["1", "2", "3", "4"].map(teste5);
console.log(num2);
