function testandoretorno() {
  return "o return irá retornar o valor que estiver dentro da string quando for chamado pelo o nome da função que o criou";
}

console.log(testandoretorno());

function returnresultado() {
  let n1 = 10;
  let n2 = 30;
  let res = n1 * n2;
  return res;
}

console.log(returnresultado());

function returnvariavel() {
  let n1 = 80;
  let n2 = 79;
  let res = n1 - n2;
  return res;
}

let variavelreturn = returnvariavel();

console.log(variavelreturn);

function returnifelse() {
  let n1 = 10;
  let n2 = 20;
  let res = n1 + n2;
  if (res % 2 == 0) {
    return "O resultado é um número par";
  } else {
    return "O resultado é um número impar";
  }
}

let teste = returnifelse();

console.log(teste);
