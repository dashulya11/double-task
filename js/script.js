const hiddenNum = 10;
let userNum;
const game = confirm('Do you want to play a game?')
if (game === true) {
    userNum = prompt('Enter the number:');
    if (userNum === hiddenNum) {
        alert('You are a good player!');
    } else if (isNaN(userNum)) {
        alert('Is not a number, sorry!');
    } else {
        alert('You lose this game!');
    }
} else {
    alert('It is a pity!');
}