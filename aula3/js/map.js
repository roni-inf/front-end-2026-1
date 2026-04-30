const numeros = [100, 200, 39, 45, 23, 204];

const numerosDobro = numeros.map((n) => n * 2);

console.log(numerosDobro);

//Criar um vetor de Nomes de Pessoas e imprimir somente a primeira letra de cada  nome usando o map

const nomes = ["Maria", "José", "Ana", "Carlos"];

const nomesAlterado = nomes
  .map((n) => n.substring(0, 1))
  .filter((n) => n.includes("J") || n.includes("M"));
console.log(nomesAlterado);
