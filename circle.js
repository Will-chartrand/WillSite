
function startSite() {
    // clickDot('#navProjects', '#Text2', '#sunID', 0);
	rotateCircle(180);
	$('#Text1').show(1000);

	$(".sun").toggle("slow");

	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
}

var _CURRENT_ANGLE = 0;
var currentRotation = 0;
var i = 0;


function toggleSun() {
	$(".sun").toggle("slow");
}


function clickDot(obj, textObj, circleObj, _rotateBy) {
	hideAllTexts();
	rotateCircle(_rotateBy);

	setTimeout(function(){
	}, 500); 
    
	// $(obj).delay(1000).animate({top: 50}, 1000)
	
	//$(obj).css({"transition-delay: 2s; -webkit-transform":"translate(10rem,10rem)"}); 
	$(textObj).toggle("slow");
}

function hideAllTexts() {
	var textCounter = 0;
	for(textCounter = 0; textCounter < 9; textCounter++) {
		$('#Text' + textCounter).hide(1000);
	}
}

function rotateCircle(rotateBy) {
	currentRotation = getRotationDegrees($('.sun'));
	if(currentRotation % 360 != rotateBy) {
		$("#sunID").css( { transform: 'rotate('+rotateBy+'deg)'});
		$(".dot").css({ transform: 'rotate(-'+rotateBy+'deg)'});
	}
	return;
}

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
