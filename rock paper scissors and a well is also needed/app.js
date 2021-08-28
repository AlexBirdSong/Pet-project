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
        const options = document.querySelectorAll(".options button");
        const playerHand = document.getElementById("player-hand");
        const computerHand = document.getElementById("computer-hand");

        const computerOptions = ['Камень', 'Бумага', 'Ножницы', 'Колодец'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor( Math.random() * 4);
                const computerChoice = computerOptions[computerNumber];

                playerHand.src = `sprites/${this.textContent}.png`;
                computerHand.src = `sprites/${computerChoice}.png`;
      
            });
        });             
    };



      

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');

        if(playerChoice === computerChoice){
            winner.textContent = 'Ничья!';
            return;
        }  
        if(playerChoice === 'Камень'){
            if(computerChoice === 'Ножницы'){
                winner.textContent = 'Победил игрок!';
                return;
            }
            else{
                winner.textContent = 'Победил компьютер!';
                return;
            }
        }

        if(playerChoice === 'Бумага'){
            if(computerChoice === 'Ножницы'){
                winner.textContent = 'Победил компьютер!';
                return;
            }
            else{
                winner.textContent = 'Победил игрок!';
                return;
            }
        }

        if(playerChoice === 'Колодец'){
            if(computerChoice === 'Бумага'){
                winner.textContent = 'Победил компьютер!';
                return;
            }
            else{
                winner.textContent = 'Победил игрок!';
                return;
            }
        }

        if(playerChoice === 'Ножницы'){
            if(computerChoice === 'Бумага'){
                winner.textContent = 'Победил игрок!';
                return;
            }
            else{
                winner.textContent = 'Победил компьютер!';
                return;
            }
        }
    }  

    startGame();
    playMatch();
    // updateScore();
}; 

game();