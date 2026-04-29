let clientes = new Array();
let cliente1 = ["Ana","ana@gmail.com"];
let cliente2 = ["Igor","i@gmail.com"];
let cliente3 = ["Paulo","p@gmail.com"];

clientes.push(cliente1);
clientes.push(cliente2);
clientes.push(cliente3);

for (let i = 0; i < clientes.length; i++) {
    for (let j = 0; j < clientes[i].length; j++) {
         console.log(clientes[i][j]);
    }
}

