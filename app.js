// let number=document.getElementById('number').innerHTML;
let number='23,45,8'
let  user_guess=[];
const comp_guess=[]
let rand;
// let i=0;
user_guess=number.split(',')
for(let i=0; i<=5; i++){
    rand=Math.floor(Math.random()*100)
    console.log(rand)
    comp_guess[i]=rand
}

console.log(comp_guess);
console.log(user_guess);
// console.log(rand)