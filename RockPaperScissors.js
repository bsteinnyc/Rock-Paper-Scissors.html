var wins = 0;
var losses = 0;
var ties= 0;
var opponent="k";
var winner="k";
var cpu="k";
//declare variables

function choiceR() {//if user chooses rock
    opponent="Rock"; //set opponent variable
    document.getElementById("matchup1").innerHTML = "You chose Rock!"; //update user choice
    battle();
};


function choiceP() {//if user chooses paper
    opponent="Paper";
    document.getElementById("matchup1").innerHTML = "You chose Paper!";
    battle();
};


function choiceS(){//if user chooses scissors
    opponent="Scissors";
    document.getElementById("matchup1").innerHTML = "You chose Scissors!";
    battle();
};


function battle() {
    var num=Math.random(); //choose a random # from 0-.999 
    if(num<=0.33){//rock
    cpu="Rock";
    document.getElementById("matchup2").innerHTML = "CPU chose Rock!"; //update CPU choice
    }
    else if(num<=.67){//paper
    cpu="Paper";
    document.getElementById("matchup2").innerHTML = "CPU chose Paper!";
    }
    else if(num<=1){//scissors
    cpu="Scissors";
    document.getElementById("matchup2").innerHTML = "CPU chose Scissors!";
    }
if(opponent!=cpu){
if(opponent=="Rock" && cpu=="Scissors"){
    document.getElementById("winner").innerHTML = "You win!"; //update winner
    wins++; //add to win/loss/tie count
}
else if(opponent=="Rock" && cpu=="Paper"){
    document.getElementById("winner").innerHTML = "CPU wins!";
    losses++;
}
else if(opponent=="Paper" && cpu=="Scissors"){
    document.getElementById("winner").innerHTML = "CPU wins!";
    losses++;
}
else if(opponent=="Paper" && cpu=="Rock"){
    document.getElementById("winner").innerHTML = "You win!";
    wins++;
}
else if(opponent=="Scissors" && cpu=="Rock"){
    document.getElementById("winner").innerHTML = "CPU wins!";
    losses++;
}
else if(opponent=="Scissors" && cpu=="Paper"){
    document.getElementById("winner").innerHTML = "You win!";
    wins++;
}
}
else{ //if choices are the same
	document.getElementById("winner").innerHTML = "It's a tie!";
	ties++;
}
    document.getElementById("Wins").innerHTML=wins;
    document.getElementById("Losses").innerHTML=losses;
    document.getElementById("Ties").innerHTML=ties;
    //send over new count of W/L/T
};
    document.getElementById("buttonidr").addEventListener("click",choiceR); //Rock Button Clicked
    document.getElementById("buttonidp").addEventListener("click",choiceP); //Paper Button Clicked
    document.getElementById("buttonids").addEventListener("click",choiceS); //Scissors Button Clicked






















