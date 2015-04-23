var i = 0;
var j = 0;

$(document).ready(function(){

	$(".genButton").on('click', function(){
		// Add a class to the p element and add text to it
		i++;
		$('p').addClass("selected");
		$(".selected").html("Line #" + i);

		// If buttons don't exist, create them
		var button1 = $("button").hasClass("colorChange");
		var button2 = $("button").hasClass("rmButton");
		
		if (button1 == false && button2 == false) {
			$(".container").append("<button class='colorChange'>Change Color</button>");
			$(".container").append("<button class='rmButton'>Remove Buttons</button>");
		}
		
		// Change Color
		$(".colorChange").on('click', function(){
			j++;
			if (j == 1) {
				$('p').css({"background-color": "yellow",
							"font-size": "45px"});
			} else {
				$('p').css({"background-color": "white",
							"font-size": "16px"});
				j = 0;
			}
		});

		// Remove Button
		$(".rmButton").on('click', function(){
			$('p').empty().removeClass("selected");
			$('.colorChange').remove();
			$('.rmButton').remove();
		});

	});
});