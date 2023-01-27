// let number=document.getElementById('number').innerHTML;
let number='13,16,19'
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
junk();

function junk(){
    count=0;
    let l=0;
    for(values of user_guess){
        if(values==comp_guess[l]){
            count++
        }
        l++;
    }
    if(count==3){
        console.log("success")
    }
    else{
        console.log("Not it bruv")
    }
}

console.log(comp_guess);
console.log(user_guess);
// console.log(rand)