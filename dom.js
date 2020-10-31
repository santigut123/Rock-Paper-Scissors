    let playerScore=0;
    let compScore=0;
    let round=1;
    function computerPlay()
    {
      let guess=Math.round((Math.random()*3)+1);
      let result="";
      if(guess==1){
        result="ROCK";

      }
      else if(guess==2)
      {
        result="PAPER";
      }
      else{
        result="SCISSORS";

      }
      return result;

    }
    function playRound(playerSelection,computerSelection)
    {
      playerSelection.toUpperCase();
      console.log(playerSelection);

      let result="";
      if(playerSelection=="ROCK")
      {
        if(computerSelection==playerSelection)
        {
          result="YOU TIE";
        }
        else if(computerSelection=="PAPER")
        {
          result="YOU LOSE, PAPER BEATS ROCK";
          compScore++;

        }
        else if(computerSelection=="SCISSORS")
        {
          result="YOU WIN, ROCK BEATS SCISSORS";
          playerScore++;
        }
        

      }
      else if(playerSelection=="PAPER")
      {
        if(computerSelection==playerSelection)
        {
          result="YOU TIE";

        }
        else if(computerSelection=="SCISSORS")
        {
          result="YOU LOSE, SCISSORS BEAT PAPER";
          compScore++;
        }
        else if(computerSelection=="ROCK")
        {
          result="YOU WIN, PAPER BEATS ROCK";
          playerScore++;
        }

      }
      else{
        if(computerSelection==playerSelection)
        {
          result="YOU TIE";
        }
        else if(computerSelection=="ROCK")
        {
          result="YOU LOSE ROCK BEATS SCISSORS";
          compScore++;
        }
        else if(computerSelection=="PAPER")
        {
          result="YOU WIN, SCISSORS BEAT PAPER";
          playerScore++;
        }

      }
      
      return result;

    }
    function game()
    {
      
      alert("you have started the game");rockButton=document.querySelector("#rock");
      const paperButton=document.querySelector("#paper");
      const scissorsButton=document.querySelector("#scissors");
      const resultArea=document.querySelector('#result');
      const humanScore=document.querySelector('#humanScore');
      const computerScore=document.querySelector('#computerScore');
      
      roundNumber.textContent=round;
      
        
        rockButton.addEventListener('click',()=>{
          result=playRound("ROCK",computerPlay());
          resultArea.textContent=result;
          computerScore.textContent=compScore;
          humanScore.textContent=playerScore;
          round++;
          roundNumber.textContent=round;

        })
        paperButton.addEventListener('click',()=>{
          result=playRound("PAPER",computerPlay());
          resultArea.textContent=result;
          computerScore.textContent=compScore;
          humanScore.textContent=playerScore;
          round++;
          roundNumber.textContent=round;
        })
        scissorsButton.addEventListener('click',()=>{
          result=playRound("SCISSORS",computerPlay());
          resultArea.textContent=result;
          computerScore.textContent=compScore;
          humanScore.textContent=playerScore;
          round++;
          roundNumber.textContent=round;
        })
        if(round==5)
        {
          if(compScore>playerScore)
          {
            alert("YOU LOST");
          }
          else if(playerScore>compScore)
          {
            alert("YOU WON!");
            
          }
          else{
            alert("YOU TIED!")
          }
        }
      
        }

      

      
    

    
    const startGame= document.querySelector('#start');
    startGame.onclick=()=>game();