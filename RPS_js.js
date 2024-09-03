function getComputerChoice(){
    choices = ["Rock","Paper","Scissors"]
    choice = Math.round(Math.random() * 3)
    return(choices[choice])
};

function getHumanChoice(){
    choice = prompt("R, P, S?")
    return(choice)
}

console.log(getComputerChoice())
console.log(getHumanChoice())