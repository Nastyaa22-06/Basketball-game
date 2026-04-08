let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

let guestscoreEl= document.getElementById("guest-score")
let guestScore= 0 

function plus1(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function plus2(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function plus3(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
function plus4(){
    guestScore += 1
    guestscoreEl.textContent = guestScore
}
function plus5(){
    guestScore += 2
    guestscoreEl.textContent = guestScore
}
function plus6(){
    guestScore += 3
    guestscoreEl.textContent = guestScore
}