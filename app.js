let user = 0;
let com = 0;

const drawgame = () => {
    console.log("Game is draw. Play again!");
    messege.innerText="Game is draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const comchoice = () => {
    option = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
}

const winMessege = (userWin,userChoice,compchoice) => {
    if (userWin) {
         user++;
        userScore.innerText=user;
        console.log("You Win!");
        messege.innerText=`Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        
       
    }
    else {
        com++;
        compScore.innerText=com;
        console.log("You Loose!");
        messege.innerText=`${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    const compchoice = comchoice();
    console.log("user choince was", userChoice)
    console.log("computer choice is", compchoice);
    if (userChoice === compchoice) {
        drawgame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compchoice === "scissor" ? false : true;
        }
        else {
            userWin = compchoice === "rock" ? false : true;
        }

        winMessege(userWin,userChoice,compchoice);
    }

}

const messege=document.querySelector("#msg");
const msgcontainer=document.querySelector(".msg-container")
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    //console.log(choice);
    const userChoice = choice.getAttribute("id")
    choice.addEventListener("click", () => {
        //console.log("user chopice was",userChoice);
        playGame(userChoice);
    });

});

// this is for test
// this is for test3