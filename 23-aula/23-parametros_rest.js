function teste1(...parametros) {
  return parametros.length;
}

console.log(teste1(10, 2, 5, 4, 7, 8));

function teste2(...parametros) {
  let validandotamanho = parametros.length;
  let res = 0;
  for (let i = 0; i < validandotamanho; i++) {
    res += parametros[i];
  }
  return res;
}

console.log(teste2(10, 2));

function teste3(...parametros) {
  let res = 0;
  for (p of parametros) {
    res += p;
  }
  return res;
}

console.log(teste3(10, 2));
