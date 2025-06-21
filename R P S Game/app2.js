let youScore = document.querySelector(".sYou")
let compScore = document.querySelector(".sComp")

let ans = document.querySelector(".ans")
let reset = document.querySelector(".reset")

let choice = document.querySelectorAll(".btn")


// Play Game:
function playgame(userchoice, compchoice) {
    if (userchoice == compchoice) {
        ans.innerText = "Game Draw"
    }
    else if (userchoice === "rock" && compchoice === "paper") {
        ans.innerText = "Computer Win"
        compScore.innerText = Number.parseInt(compScore.innerText) + 1
    }
    else if (userchoice === "rock" && compchoice === "scissors") {
        ans.innerText = "You Win"
        youScore.innerText = Number.parseInt(youScore.innerText) + 1
    }
    else if (userchoice === "paper" && compchoice === "scissors") {
        ans.innerText = "Computer Win"
        compScore.innerText = Number.parseInt(compScore.innerText) + 1
    }
    else if (userchoice === "paper" && compchoice === "rock") {
        ans.innerText = "You Win"
        youScore.innerText = Number.parseInt(youScore.innerText) + 1
    }
    else if (userchoice === "scissors" && compchoice === "rock") {
        ans.innerText = "Computer Win"
        compScore.innerText = Number.parseInt(compScore.innerText) + 1
    }
    else if (userchoice === "scissors" && compchoice === "paper") {
        ans.innerText = "You Win"
        youScore.innerText = Number.parseInt(youScore.innerText) + 1
    }
}

// Comp Choice:
function computer(userchoice) {
    let ar = ["rock", "paper", "scissors"]
    let idx = Math.floor(Math.random() * 3)
    let compchoice = ar[idx]
    console.log("Comp choice: ", compchoice)

    playgame(userchoice, compchoice)
}

// User Choice:
choice.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let userchoice = e.target.id
        console.log("User choice: ", userchoice)

        computer(userchoice)
    })
})

// Reset Game:
reset.addEventListener("click", () => {
    ans.innerText = "Play Your Move..."
    compScore.innerText = 0
    youScore.innerText = 0
})
