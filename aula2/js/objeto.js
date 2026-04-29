//Forma literal

const livro = {
  titulo: "Java 21 dias",
  autor: "Fulano",
  pagina: 200,
  linguagem: "Português",
  disponivel: true,
};
//console.log(livro);

const titulo = "Bíblia do JS";
const autor = "Não lembro";
const pagina = 300;
const linguagem = "Inglês";
const disponivel = false;

const book = {
  titulo,
  autor,
  pagina,
  linguagem,
  disponivel,
};
console.log(book);

const livro2 = new Object();
livro2.titulo = "Redes";
livro2.autor = "Laércio de Vasconcelos";

console.log(livro2);
