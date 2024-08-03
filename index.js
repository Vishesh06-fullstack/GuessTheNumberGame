const input = document.querySelector("#input")
const form = document.querySelector("form")
const result = document.querySelector(".result")
const submitBtn = document.querySelector(".submit-btn")
const startbutton = document.querySelector(".btn-start")
const allguesses  = document.querySelector(".all-guesses");

(function () {
const allGuessesArray = []
let randomNumber = Math.round(Math.random()*100)
form.addEventListener("submit",function(e){
    e.preventDefault()
    const userInputValue = parseInt(input.value)
    if(userInputValue < randomNumber){
        result.innerText = "Too low!"
    }
    else if(userInputValue > randomNumber){
        result.innerText = "Too High!"
    }
    else {
        result.innerText = "You got it!! Congratulations!!"
        startbutton.disabled = false;
        submitBtn.disabled = true;
    }
    allGuessesArray.push(userInputValue)
    allguesses.innerText = 'Your guesses : ' + allGuessesArray.join(',')   
    form.reset()
    
})

startbutton.addEventListener('click',function(){
    allguesses.innerText = ""
    result.innerText = ""
    startbutton.disabled = true;
    submitBtn.disabled = false;
    let randomNumber = Math.round(Math.random()*100)
})
})()
