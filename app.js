//Aruthemetic
const a = 15;
const b = 10;

//1.Addition[+]
console.log(`${a}+${b}: ${a + b}`);//25
document.getElementById('add').innerHTML = a + b;

//2.Subtraction[-]
console.log(`${a}-${b}: ${a - b}`);//5
document.getElementById('sub').innerHTML = a - b;

//3.multiplication[*]
console.log(`${a}*${b}: ${a * b}`);//150
document.getElementById('mul').innerHTML = a * b;

//4.division
console.log(`${a}/${b}: ${a / b}`);//1.5
document.getElementById("div").innerHTML = a / b;

//5.Modulus
console.log(`${a}%${b}: ${a % b}`)//5
document.getElementById("mod").innerHTML = a % b;