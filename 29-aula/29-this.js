function aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;

  this.dados_anonimo = function () {
    setTimeout(function () {
      console.log(this.nome);
      console.log(this.nota);
    }, 2000);
  };
}

const al1 = new aluno("Joao V", 111);
al1.dados_anonimo();

function aluno2(nome, nota) {
  this.nome = nome;
  this.nota = nota;

  this.dados_arrow = function () {
    setTimeout(() => {
      console.log(this.nome);
      console.log(this.nota);
    }, 2000);
  };
}

const al2 = new aluno2("Joao V M.P", 6969);
al2.dados_arrow();
