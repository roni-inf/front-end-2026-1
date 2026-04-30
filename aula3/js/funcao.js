//Function Declaration

function soma(a, b) {
  return a + b;
}
//console.log("A soma entre 10 e 20 é: "  + soma(10,20));

let numeros = [10, 20, 40, 25, 35];

function media(nums) {
  let soma = 0;

  for (let i = 0; i < nums.length; i++) {
    soma += nums[i];
  }
  return Math.round(soma / nums.length);
}
console.log("A média é:" + media(numeros));
