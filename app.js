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

        else if(values>=100){
            window.alert("Error! Number must be less than 100")
        }

        l++;
        }
       
    }
    if(count==3 && user_guess.length==3){
        console.log("success! Three direct ")
        document.getElementById('result').innerHTML="You just won! 24,00 NGN Three direct";
        count=0
    }
    else if(count==2 && user_guess.length==2){
          console.log("success! Two Sure ")
          document.getElementById('result').innerHTML="You just won 24,00 NGN!  Two Sure";
          count=0
    }
else if(user_guess.length>3){
   window.alert("Invalid Input, only enter maximum of three numbers")
   document.getElementById('userNum').innerHTML="Invalid";
}

    else{
        console.log("Not it bruv")
        document.getElementById('result').innerHTML="Oh! You lost, but take heart you can win again by tossing in a 100 NGN";
        count=0
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