const homeScore = document.getElementById("home-score")
const questScore = document.getElementById("quest-score")

const home1Button = document.getElementById("home1")
const home2Button = document.getElementById("home2")
const home3Button = document.getElementById("home3")

const quest1Button = document.getElementById("quest1")
const quest2Button = document.getElementById("quest2")
const quest3Button = document.getElementById("quest3")
const resetButton = document.getElementById("reset-button")

let homeTotal = 0

let questTotal = 0

function updateHome(){
    homeScore.innerHTML = homeTotal
}

function updateQuest(){
    questScore.innerHTML = questTotal
}

function addToHome(number){
homeTotal += number
updateHome()
}

function addToQuest(num){
    questTotal += num
    updateQuest()
}

home1Button.addEventListener("click",function(){
   addToHome(1)
})

home2Button.addEventListener("click",function(){
   addToHome(2)
})

home3Button.addEventListener("click",function(){
    addToHome(3)
})

//QUEST part

quest1Button.addEventListener("click",function(){
    addToQuest(1)
})

quest2Button.addEventListener("click",function(){
    addToQuest(2)
})

quest3Button.addEventListener("click",function(){
    addToQuest(3)
})

//reset button

resetButton.addEventListener("click",function(){
    homeTotal = 0
    questTotal = 0
    updateHome()
    updateQuest()
})
