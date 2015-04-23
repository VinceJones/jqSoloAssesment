var i = 0;

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
			$('p').css(
				"background-color", "yellow",
				"text-align", "center"
				);
		});

		// Remove Button
		$(".rmButton").on('click', function(){
			$('p').empty().removeClass("selected");
			$('.colorChange').remove();
			$('.rmButton').remove();
		});

	});
});