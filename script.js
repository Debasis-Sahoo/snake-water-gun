

let sysGuess = Math.ceil(Math.random() *3)
sysGuess = (sysGuess===1) ? "snake" : (sysGuess ===2) ? "water" : "gun"
let userInput = prompt("Your turn")
userInput = userInput.toLowerCase()

if(userInput === sysGuess){
  alert(`It's a drow \n You choose :${userInput} \n System choose :${sysGuess}`)
}
else if(userInput === "snake" && sysGuess === "water"){
   alert(`You win \n You choose :${userInput} \n System choose :${sysGuess}`)
}
else if(userInput === "snake" && sysGuess === "gun"){
 alert(`You loose \n You choose :${userInput} \n System choose :${sysGuess}`)
}
else if(userInput === "water" && sysGuess === "gun"){
 alert(`You win \n You choose :${userInput} \n System choose :${sysGuess}`)
}
else if(userInput === "water" && sysGuess === "snake"){
 alert(`You loose \n You choose :${userInput} \n System choose :${sysGuess}`)
}
else if(userInput === "gun" && sysGuess === "water"){
 alert(`You loose \n You choose :${userInput} \n System choose :${sysGuess}`)
}
else if(userInput === "gun" && sysGuess === "snake"){
 alert(`You win \n You choose :${userInput} \n System choose :${sysGuess}`)
}
else{
  alert(`enter a valid condition \n You choose :${userInput} `)
}