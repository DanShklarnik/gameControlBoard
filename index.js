
function addScore(score, toAdd, isGuest){
    console.log("function called");
    
 
    let newScore = parseInt(score) + toAdd;
    console.log(newScore);
    if (isGuest){
        document.getElementById('guest-score').textContent = newScore;
    }
    else {
        document.getElementById('home-score').textContent = newScore;
    }

}


