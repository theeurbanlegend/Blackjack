let firstCard=11
let secondCard=2
let isAlive=true
let hasBlackJack=false
let message=""
let sum=firstCard+secondCard
console.log(sum)
if (sum<=20){
    message="Do you want to draw a new card?"
}else if(sum===21){
    message="Woohoo! Youve got blackjack"
    hasBlackJack=true
}else{
    message="Sorry! You're out of the game"
    isAlive=false
}

console.log(message)