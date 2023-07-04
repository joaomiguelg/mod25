const alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Pedro", nota: 5.5 },
    { nome: "Ana", nota: 6.0 },
    { nome: "Lucas", nota: 5.5 }
  ];

function filtrarAlunos(aprovados) {
    const alunosAprovados = alunos.filter(function(aluno) {
      return aluno.nota >= 6;
    });
  
    return alunosAprovados;
  }
    
  const alunosAprovados = filtrarAlunos(alunos);
  console.log(alunosAprovados);
  