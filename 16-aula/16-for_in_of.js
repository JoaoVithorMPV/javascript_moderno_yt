/*
let teste1 = [3, 8, 13, 14, 16];

for (let i = 0; i < teste1.length; i++) {
  console.log(teste1[i]);
}
*/

/*
let teste2 = [3, 8, 13, 14, 16];

for (t in teste2) {
  console.log(teste2[t]);
}

for (t of teste2) {
  console.log(t);
}
*/

const domdiv = document.getElementsByTagName("div");

for (t of domdiv) {
  console.log((t.innerText = "teste cabuloso"));
}

for (t in domdiv) {
  console.log(domdiv[t].innerHTML);
}
