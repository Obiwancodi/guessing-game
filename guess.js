/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.



var info = {
	winning: 0,
	guess: 0,
	guesses : [],
	hints: ["Never pet a burning dog","Never floss with a stranger","Always put the toilet seat down",
	"If at first you don't succeed, skydiving is not for you",],
	hintNum: 0,
}



// Generate the Winning Number

function generateWinningNumber(){
	var num = Math.floor((Math.random() * 100) + 1);
	info.winning = num;
	return num;
}


// Fetch the Players Guess


	
		$(document).keypress(function(e){
			var key = e.which;
				
			if (key === 13) {
		 		info.guess = +$('.guess-button').val();
		 		
		 		checkGuess();
		 	}
		 	
	})


function checkGuess() {
	$('.nope').remove();
	$('.help').remove();
	if (info.winning === info.guess){
			$(document).ready(function() {
				var win = $('<h2 class="lose">WINNER!!!!!</h2>');
				$('.status').append(win);
				$('.nope').remove();
				$('.left').remove();
			})
	}

	else if (info.guesses.includes(info.guess)) {
		$(document).ready(function()  {
			var tie = $('<h3 class="help">You already guessed that!</h3>');
			$('.try').append(tie);
		})
	}

	else {

		info.guesses.push(info.guess); 

		if(info.guesses.length >= 5) {
			var lose = $('<h2 class="lose">You Lost!</h2>');
			$('.left').remove();
			$('.nope').remove();
			$('.status').append(lose);
			
		}
		else {
		$('.left').remove();
		var guessLeft = " " + (5 - info.guesses.length);
		var lefty = $('<h3 class ="left">'+guessLeft+' Guesses Remaining</h3>');
		$('.remain').append(lefty);
		var nope = $('<h3 class="nope">Try Again!</h3>');
		$('.try').append(nope);

		howClose();
		}	

	}
}

	// function that checks how close value is 

	var howClose = function() {

		$('.hot').remove();
		var close = Math.abs(info.winning - info.guess)

		if(close < 10) {
			var hot = $('<p class="hot">Hot!</p>');
			$('.hot-cold').append(hot);
		}

		else if (close < 25) {
			var warm = $('<p class="hot">Warm</p>');
			$('.hot-cold').append(warm);
		}

		else if (close < 50) {
			var cold = $('<p class="hot">Cold</p>');
			$('.hot-cold').append(cold);
		}

		else {
			var ice = $('<p class="hot">Ice Cold</p>');
			$('.hot-cold').append(ice);
		}
	}




$(document).ready(function(){
	$('.hint').on('click', function(){
		hintRotate();
	})
})	 
	

var hintRotate = function() {
	$('.fun').remove();

	if (info.hintNum === 3) {
		info.hintNum = 0;
	}
	
	if(info.hintNum ===0) {
		var dog = $('<p class="fun">Never pet a burning dog</p>');
		$('.advice').append(dog);
		info.hintNum++;
	}

	else if (info.hintNum === 1) {
		var floss = $('<p class="fun">Never floss with a stranger</p>');
		$('.advice').append(floss);
		info.hintNum++;

	}

	else if (info.hintNum === 2) {
		var always = $('<p class="fun">Always put the toilet seat down</p>');
		$('.advice').append(always);
		info.hintNum++;
	}


}


$(document).ready(function(){
	$('.again').on('click', function() {

		generateWinningNumber();
		$('.hot').remove();
		var startHot = $('<p class="hot">Good Luck!</p>')
		$('.hot-cold').append(startHot);
		$('.fun').remove();
		var startAdvice = $('<p class="fun">Want some Advice?</p>');
		$('.advice').append(startAdvice);
		$('.help').remove();
		$('.lose').remove();
		$('.left').remove();
		$('.remain').append('<h3 class="left">5 Guesses Remaining</p>')
		info.guesses = [];
		info.guess = 0;


	})
})



 	
generateWinningNumber();



/* **** Event Listeners/Handlers ****  */

