let functionanonima = function (t1, t2) {
  return t1 + t2;
};

let arrowfunction = (t1, t2) => {
  return t1 + t2;
};

console.log(arrowfunction(10, 2));

let arrowfunction2 = (t1) => {
  return t1;
};

console.log(arrowfunction2(10));

let arrowfunction3 = (t1) => t1 + 57;
//O arrow function cria um return automaticamente, qunado não é usado
//return no arrow function não é necessário a abertura de chaves {}
//porem isso só vale para situacoes simples, por ex,
//caso seja necessário criar uma variavel dentro da funcao será
//necessario o return e as chaves{}, veja em "arrowfunction5" um ex

console.log(arrowfunction3(10));

let arrowfunction4 = (t1) => t1;

console.log(arrowfunction4(26));

let arrowfunction5 = (t1, t2) => {
  let res = t1 + t2;
  return res;
};

console.log(arrowfunction5(66, 69));
