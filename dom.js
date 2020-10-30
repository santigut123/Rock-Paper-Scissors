let playerScore=0;
    let compScore=0;
    function ComputerPlay()
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
      let userChoice=""
      let compChoice="";
      for(let i=0;i<5;i++)
      {
        userChoice=window.prompt("PAPER,SCISSORS,OR ROCK?");
        compChoice=ComputerPlay();
        console.log(playRound(userChoice,compChoice));

      }
      if(compScore>playerScore)
      {
        console.log("YOU LOSE BUDDY!");
      }
      else if(playerScore>compScore){
        console.log("YOU WIN!");
      }
      else{
        console.log("YOU DONE TIED");
      }

    }