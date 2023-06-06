let player={
    name:"Player1",
    chips:"200"
}
let cards=[]
let sum=0
let isAlive=false
let hasBlackJack=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEL=document.getElementById("player-el")
playerEL.textContent=player.name + ": $"
playerEL.textContent+=player.chips


function getRandomCard(){
    let random=(Math.floor(Math.random()*13)+1)
    if (random===11||random===12||random===13){
        return 10
    }else if(random===1){
        return 11 
    }else {
        return random
    }
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()  
    let secondCard=getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard) 
    sum=firstCard+secondCard
    initGame()
}
function initGame(){
    cardsEl.textContent="Cards: "
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+ " "
    }
    
    sumEl.textContent= "Sum: "+sum

    if (sum<=20){
        message="Do you want to draw a new card?"
    }else if(sum===21){
        message="Woohoo! Youve got blackjack"
        hasBlackJack=true
    }else{
        message="Sorry! You're out of the game"
        isAlive=false
    }
    messageEl.textContent=message
   
}

function newCard(){
    if(isAlive===true&&hasBlackJack===false){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    initGame()
    }
    
    else{
        message="You already lost! Please restart"
        messageEl.textContent=message
        alert("Please refresh the page to restart the game")
    }
    
    
}

