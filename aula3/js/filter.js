const pessoas = [
  { nome: "Carla", idade: 25, cidade: "Petrópolis" },
  { nome: "Carlos", idade: 27, cidade: "Petrópolis" },
  { nome: "Sergio", idade: 54, cidade: "Petrópolis" },
  { nome: "Adriana", idade: 35, cidade: "Juiz de Fora" },
  { nome: "Flávia", idade: 15, cidade: "São Paulo" },
];

//Filtrar todas as pessoas que moram em Petrópolis
//Filtrar todos de Petrópolis com idade acima de 50 anos

const pessoasFiltro = pessoas.filter(
  (p) => p.cidade === "Petrópolis" && p.idade >= 50,
);
console.log(pessoasFiltro);

//Exemplo find
const procurarIdade = pessoas.find((p) => p.idade === 15);
console.log(procurarIdade);

const nums = [3, 5, 9, 12, 4, 10];
//Encontrar o primeiro número par

const numeroPar = nums.find((n) => n % 2 === 0);
console.log(numeroPar);

