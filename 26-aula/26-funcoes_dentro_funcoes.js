let testeSoma = (...valores) => {
  let testeSomar = (val) => {
    let res = 0;
    for (t of val) {
      res += t;
    }
    return res;
  };
  return testeSomar(valores);
};

console.log(testeSoma(10, 4, 48, 28));

let testeSoma2 = (...paramentros) => {
  let testeSomar2 = (val) => {
    let res = 0;
    for (t of val) {
      res += t;
    }
    return res;
  };
  return testeSomar2(paramentros);
};

console.log(testeSoma2(33, 33));

let testeSomar3 = (val) => {
  let res = 0;
  for (t of val) {
    res += t;
  }
  return res;
};

let testeSoma3 = (...paramentros) => {
  return testeSomar3(paramentros);
};

console.log(testeSoma3(88, 88));

let testeSomar4 = (val) => {
  let res = 0;
  for (t of val) {
    res += t;
  }
  return res;
};

let testeSoma4 = (...paramentros) => {
  return testeSomar4(paramentros);
};

valor = [10, 5, 15];

console.log(testeSoma4(...valor));
