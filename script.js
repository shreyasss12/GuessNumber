'use strict';

let secretnumber = Math.round(Math.random() * 20) ;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

if(!guess){
    document.querySelector('.message').textContent =
    '⛔ No Number!'
}else if (guess === secretnumber) {
    document.querySelector('.message').textContent =
    '🥳 Correct Number!'
    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.background = 'linear-gradient(#82CD47,#54B435,#379237)';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

}else if (guess > secretnumber) {
    if(score > 0){
        document.querySelector('.message').textContent =
        '📈 Too High!'
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent =
        '😓 You Lost The Game!'
    }
}
else if (guess < secretnumber) {
    if(score > 0){
        document.querySelector('.message').textContent =
        '📉 Too Low!'
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent =
        '😓 You Lost The Game!'
    }
} 
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretnumber = Math.round(Math.random() * 20) ;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.background = 'linear-gradient(#1561ad, #1c77ac,#1dbab4)';
    document.querySelector('.number').style.width = '15rem';

});

