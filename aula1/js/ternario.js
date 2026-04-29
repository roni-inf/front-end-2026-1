let testeGripe = true;
let resultado = testeGripe ? "Deu positivo" : "Negativo";
console.log(resultado);

let statusPedido = "pago";
let confirmacaoTransportadora = true;

console.log(
  statusPedido === "pago" && confirmacaoTransportadora
    ? "Pedido enviado"
    : "Há pendências no pedido",
);

let mes = 3;

console.log(mes === 1 ? "Janeiro" : mes === 2 ? "Fevereiro" : "Março");

if (mes === 1) {
  console.log("Janeiro");
} else if (mes === 2) {
  console.log("Fevereiro");
} else {
  console.log("Março");
}
