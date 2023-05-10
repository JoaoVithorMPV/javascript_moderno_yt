let teste = function (n1, n2) {
  return n1 + n2;
};

console.log(teste(10, 5));

let teste2 = function (...parametros) {
  let res = 0;
  for (t of parametros) {
    res += t;
  }
  return res;
};

console.log(teste2(10, 5, 2));

let teste3 = new Function("n1", "n2", "return n1+n2");

console.log(teste3(25, 17));
