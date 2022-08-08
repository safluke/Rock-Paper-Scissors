


function getComputerChoice(){
    const choices= ["Rock" , "Paper" , "Scissors"];
    choice=choices[Math.floor(Math.random() * 3)] ;
    return choice
}

let humanTally=0
let computerTally=0

function playround(evt){
    const computerSelection = getComputerChoice();

    playerSelection=evt.currentTarget.myParam
    if ( computerSelection==playerSelection){
        
    }
    else if (computerSelection=="Rock" && playerSelection=="Scissors"){
        computerTally+=1;
    }
    else if (computerSelection=="Rock" && playerSelection=="Paper"){
        humanTally+=1;
    }
    else if (computerSelection=="Paper" && playerSelection=="Scissors"){
        humanTally+=1;
    }
    else if (computerSelection=="Paper" && playerSelection=="Rock"){
        computerTally+=1;
    }
    else if (computerSelection=="Scissors" && playerSelection=="Paper"){
        computerTally+=1;
    }
    else if (computerSelection=="Scissors" && playerSelection=="Rock"){
        humanTally+=1;
    }       
        
    

    document.querySelector('#human').textContent = humanTally
    document.querySelector('#computer').textContent = computerTally

    check()

    }

function check(){
    if (computerTally>humanTally && computerTally>=5){
        document.querySelector('#computer').textContent = "Computer Won"
        document.querySelector('#animation').classList.remove("animation1") 
        document.querySelector('#animation').classList.add("animation2") 
        humanTally=0
        computerTally=0
    }else if(humanTally>computerTally && humanTally >=5){
        document.querySelector('#human').textContent = "Human Won"
        document.querySelector('#animation-win').classList.remove("animation1") 
        document.querySelector('#animation-win').classList.add("animation2") 
        humanTally=0
        computerTally=0

}}

function reset(){
    document.querySelector('#animation-win').classList.remove("animation2") 
    document.querySelector('#animation-win').classList.add("animation1") 
    document.querySelector('#animation').classList.remove("animation2") 
    document.querySelector('#animation').classList.add("animation1") 
    document.querySelector('#human').textContent = 0
    document.querySelector('#computer').textContent = 0
}


let btn = document.querySelector('#rock-button'); 
btn.addEventListener('click',playround);
btn.myParam ="Rock";
    
let btn2 = document.querySelector('#paper-button');
btn2.addEventListener('click',playround);
btn2.myParam ="Paper";

let btn3 = document.querySelector('#scissors-button');
btn3.addEventListener('click',playround);
btn3.myParam ="Scissors";

try{
    let btn4=document.querySelector('#lose');
    btn4.addEventListener('click',reset);

    let btn5=document.querySelector('#win');
    btn5.addEventListener('click',reset);

}
catch(typeError){

}