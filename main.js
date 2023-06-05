let firstCard=11
let secondCard=2
let isAlive=true
let hasBlackJack=false
let message=""
let sum=firstCard+secondCard
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
function startGame(){

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
    cardsEl.innerText="Cards: "+" "+firstCard+" "+secondCard
    sumEl.innerText= "Sum: "+sum
}

function newCard(){
    
}