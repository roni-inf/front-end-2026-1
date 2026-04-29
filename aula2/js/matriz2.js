let clientes = [
  ["Ana", "ana@gmail.com"],
  ["Igor", "i@gmail.com"],
  ["Paulo", "p@gmail.com"],
];

clientes.push(["Carla", "c@gmail.com"]);
for (let i = 0; i < clientes.length; i++) {
  for (let j = 0; j < clientes[i].length; j++) {
    console.log(clientes[i][j]);
  }
}
