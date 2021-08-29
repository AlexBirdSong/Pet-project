const game = () => {
    let pScore = 0;
    let cScore = 0;

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
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })

        const computerOptions = ['Камень', 'Бумага', 'Ножницы', 'Колодец'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor( Math.random() * 4);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(()=>{

                    compareHands(this.textContent, computerChoice)

                    playerHand.src = `sprites/${this.textContent}.png`;
                    computerHand.src = `sprites/${computerChoice}.png`;
                    
                 
                },2000);

        
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease'; 
                

            });
        });             
    };


    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p ');
        const computerScore = document.querySelector('.computer-score p ');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
      

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');

        if(playerChoice === computerChoice){
            winner.textContent = 'Ничья!';
            return;
        }  
        if(playerChoice === 'Камень'){
            if(computerChoice === 'Ножницы'){
                winner.textContent = 'Победил игрок!';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Победил компьютер!';
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'Бумага'){
            if(computerChoice === 'Ножницы'){
                winner.textContent = 'Победил компьютер!';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Победил игрок!';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'Колодец'){
            if(computerChoice === 'Бумага'){
                winner.textContent = 'Победил компьютер!';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Победил игрок!';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'Ножницы'){
            if(computerChoice === 'Бумага'){
                winner.textContent = 'Победил игрок!';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Победил компьютер!';
                cScore++;
                updateScore();
                return;
            }
        }
    }  

    startGame();
    playMatch();
  
}; 

game();