// let number=document.getElementById('number').innerHTML;
let number='71,11,26'
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
        for(Valus of comp_guess ){
             if(values==Valus){
            count++
        }
        l++;
        }
       
    }
    if(count==3 && user_guess.length==3){
        console.log("success! Three direct ")
    }
    else if(count==2 && user_guess.length==2){
          console.log("success! Two Sure ")
    }
    else{
        console.log("Not it bruv")
    }
}

console.log(comp_guess);
console.log(user_guess);
// console.log(rand)