$(document ).ready(function(){

	// randomly generate a "targetNumber" between 19 and 120
  	var targetNumber = Math.floor(Math.random() * ((120-19)+1)+19);
  	// Here we set the "numberToGuess" header to match the "targetNumber".
  	// Eventually this will allow us to change the HTML to match the value in the Javascript.
  	$("#numberToGuess").text(targetNumber);

  	console.log(targetNumber);

  	//Now I will create 4 different random numbers to be associated with my 4 different crystals
  	var num1 = Math.floor(Math.random() * ((12-1)+1)+1);
  	var num2 = Math.floor(Math.random() * ((12-1)+1)+1);
  	var num3 = Math.floor(Math.random() * ((12-1)+1)+1);
  	var num4 = Math.floor(Math.random() * ((12-1)+1)+1);

  	//declaring my variables

  	var counter = 0;
  	var wins = 0;
  	var losses = 0;

  	//wins, losses and counter variables are now associated with their corresponding html elements
  	$("#winCounter").text(wins);
  	$("#lossCounter").text(losses);
  	$("#scoreHolder").text(counter);


  	//function that resets the game
	    function reset(){
        targetNumber = Math.floor(Math.random() * ((120-19)+1)+19);
        console.log(targetNumber)
        $("#numberToGuess").text(targetNumber);
        num1= Math.floor(Math.random() * ((12-1)+1)+1);
        num2= Math.floor(Math.random() * ((12-1)+1)+1);
        num3= Math.floor(Math.random() * ((12-1)+1)+1);
        num4= Math.floor(Math.random() * ((12-1)+1)+1);
        
        counter= 0;
        $("#scoreHolder").text(counter);
      } 

      // function that alerts if the user won the game
      function won(){
      	$("#messageDisplay").text("You won!!")
      	wins++;
      	$("#winCounter").text(wins);
      	reset();
      }

      // function that alerts if the user lost the game
      function lost(){
      	$("#messageDisplay").text("You lost!!")
      	losses++;
      	$("#lossCounter").text(losses);
      	reset();
      }



    //events that happen when user clicks crystal one
      $('#crystal1').on ('click', function(){
    		counter += num1;
    		console.log("New counter= " + counter);
    		 $("#scoreHolder").text(counter);
          	//sets win/lose conditions
        		if (counter == targetNumber){
          		won();
        	}
        		else if ( counter > targetNumber){
          		lost();
        	}   
  	});  

    //events that happen when user clicks crystal two
      $('#crystal2').on ('click', function(){
    		counter += num2;
    		console.log("New counter= " + counter);
    		 $("#scoreHolder").text(counter);
          	//sets win/lose conditions
        		if (counter == targetNumber){
          		won();
        	}
        		else if ( counter > targetNumber){
          		lost();
        	}   
  	});  

    //events that happen when user clicks crystal three
      $('#crystal3').on ('click', function(){
    		counter += num3;
    		console.log("New counter= " + counter);
    		 $("#scoreHolder").text(counter);
          	//sets win/lose conditions
        		if (counter == targetNumber){
          		won();
        	}
        		else if ( counter > targetNumber){
          		lost();
        	}   
  	});  

    //events that happen when user clicks crystal three
      $('#crystal4').on ('click', function(){
    		counter += num4;
    		console.log("New counter= " + counter);
    		 $("#scoreHolder").text(counter);
          	//sets win/lose conditions
        		if (counter == targetNumber){
          		won();
        	}
        		else if ( counter > targetNumber){
          		lost();
        	}   
  	}); 


});