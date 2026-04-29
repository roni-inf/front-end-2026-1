try {
  console.log("teste1");
  num = 1/0;
  console.log("teste2" + num);
} catch (error) {
  console.log("Erro!");
} finally {
  console.log("Finalizar uma tarefa!");
}
