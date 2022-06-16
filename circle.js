
// The things that need to be set up at the start of the page
function startSite() {
	// Make the circle menu invisible
	$('.sun').css("display", "none")

    // clickDot('#navProjects', '#Text2', '#sunID', 0);

	// Rotate the circle to have the homepage icon at the bottom of it, then show the corresponding text
	rotateCircle(180);
	$('#Text1').show(1000);
	$('#Text1').css("display", "block")


	// Initializes the tooltip functionality (hover over the circle icons and see their titles)
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
}

// Variable declaration (to keep track of where the circle is)
var _CURRENT_ANGLE = 0;
var currentRotation = 0;
var i = 0;

// Makes the circle menu visible
function toggleSun() {
	$(".sun").toggle("slow");
}

// Rotates the circle menu to the desired angle, delay for 500ms, then show the corresponding text for the icon that was clicked
function clickDot(obj, textObj, circleObj, _rotateBy) {
	hideAllTexts();
	rotateCircle(_rotateBy);

	setTimeout(function(){
	}, 500); 
    
	// $(obj).delay(1000).animate({top: 50}, 1000)
	
	//$(obj).css({"transition-delay: 2s; -webkit-transform":"translate(10rem,10rem)"}); 
	$(textObj).toggle("slow");
}

// loops through all of the text boxes and hides them
function hideAllTexts() {
	var textCounter = 0;
	for(textCounter = 0; textCounter < 9; textCounter++) {
		$('#Text' + textCounter).hide(1000);
		$('#Text' + textCounter).css("display", "none");
	}
	$(".textbox").css("display", "none");
}

// Rotate the circle to the inputted angle
function rotateCircle(rotateBy) {
	currentRotation = getRotationDegrees($('.sun'));
	if(currentRotation % 360 != rotateBy) {
		$("#sunID").css( { transform: 'rotate('+rotateBy+'deg)'});
		$(".dot").css({ transform: 'rotate(-'+rotateBy+'deg)'});
	}
	return;
}

// Get the current angle of the rotation of the circle menu
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }

    if(angle < 0) angle +=360;
    return angle;
}
