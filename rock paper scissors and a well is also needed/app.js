const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelectorAll('.player-hand');
        const computerHand = document.querySelectorAll('.computer-hand');

        const computerOptions = ['rock', 'paper', 'scissors', 'wall'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor( Math.random() * 4);
                const computerChoise = computerOptions[computerNumber];
                console.log(computerChoise);
            });
        });

   
     
    }

    startGame();
    playMatch();
    // updateScore();
}; 

game();