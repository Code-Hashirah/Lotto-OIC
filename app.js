// let number=document.getElementById('number').innerHTML;
let number=""
let  user_guess=[];
const comp_guess=[]
let rand;

function convertToArray(){
    number=document.getElementById('number').value;
    // let newNum=number.toString()
    user_guess=number.split(',')
    console.log(number)
    console.log(user_guess)
}

function junk(){
  convertToArray();
    for(let i=0; i<=5; i++){
        rand=Math.floor(Math.random()*100)
        console.log(rand)
        comp_guess[i]=rand
    }
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
        document.getElementById('result').innerHTML="success! Three direct";
    }
    else if(count==2 && user_guess.length==2){
          console.log("success! Two Sure ")
          document.getElementById('result').innerHTML="success!  Two Sure";
    }
    else{
        console.log("Not it bruv")
        document.getElementById('result').innerHTML="Not it bruv";
    }
    document.getElementById('userNum').innerHTML="Your Numbers are "+user_guess;
document.getElementById('computerNum').innerHTML="The lucky Numbers are "+comp_guess;
}


//fnctn
function Input(a){
document.getElementById('number').value+=a;
}

function display1(){
    document.getElementById('number').value=document.getElementById('number').value.slice(0,-1);
}
// console.log(comp_guess);
// console.log(user_guess);
// console.log(rand)