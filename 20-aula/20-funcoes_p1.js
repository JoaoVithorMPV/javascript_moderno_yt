function teste() {
  console.log("testando como funciona uma função");
}

teste();

for (let i = 0; i < 2; i++) {
  teste();
}

function soma1_10() {
  let n1 = 1;
  let n2 = 10;
  let soma = n1 + n2;
  console.log(soma);
}

soma1_10();

function mudandotexto() {
  let d1 = document.getElementById("d1");
  let d2 = document.getElementById("d2");
  d1.innerHTML = "Testando a alteração de conteúdo";
}

function mudandotexto3() {
  let d3 = document.getElementById("d3");
  d3.innerHTML = "mudando o conteúdo do d3";
}
