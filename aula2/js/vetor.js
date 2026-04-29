let cores = [];
let cursos = ["Java", "React", "Angular"];
let numeros = [100, 50, 10, 3, 8];
let  nums;

nums = numeros.join("|");

let nums2 = [10, 20, 30];
let nums3 = numeros.concat(nums2);
console.log(nums3);


console.log(nums);


cores[1] = "Branco";
console.log(cores[0]);
console.log(cores[1]);


cursos.push("PHP");
cursos.push("Delphi");

cursos.unshift("C#");

cursos.sort();
cursos.reverse();

cursos.forEach((c) => {
  console.log(c);
});
