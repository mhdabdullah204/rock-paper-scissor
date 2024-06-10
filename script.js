let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");

const genComputerChoice = ()=>{
    //rock ,  paper , scissor 
    const options = ["rock" ,  "paper" , "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("Game Was Draw!");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "purple"
}

const playGame = (userChoice)=>{
console.log("user choice = ",userChoice);
const compChoice = genComputerChoice();
console.log("computer choice = ",compChoice);

const showWinner = (userWin,userChoice,compChoice)=>{

    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!")
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose")
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

if(userChoice === compChoice){
    drawGame()
} else{
    let userWin= true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper"? false : true;
    } else if(userChoice === "paper"){
        userWin = compChoice ==="scissors"? false : true;

    } else{
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}

};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("user choice was clicked",userChoice);
playGame(userChoice)
    })
})

const msg =  document.querySelector("#msg");
