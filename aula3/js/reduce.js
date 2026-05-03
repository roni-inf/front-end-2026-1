const nums = [3, 5, 9, 12, 4, 10, 50];

// let soma = 0;

// for (let i = 0; i < nums.length; i++) {
//     soma+= nums[i];
// }
// console.log(soma);

//const soma = nums.reduce((acumulador, num) =>  acumulador + num,0);
console.log( Math.round( nums.reduce((acumulador,num)=>acumulador+num,0)/nums.length));






