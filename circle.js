
function startSite() {
	rotateCircle(180);
	$('#Text1').show(1000);
}

var _CURRENT_ANGLE = 0;
var currentRotation = 0;
var i = 0;


function update() {
clickDot('.dot1', '#Text1', '#sunID', 180);
clickDot('.dot2', '#Text2', '#sunID', 0);
clickDot('.dot3', '#Text3', '#sunID', 90);
clickDot('.dot4', '#Text4', '#sunID', 270);
clickDot('.dot5', '#Text5', '#sunID', 180+45);
clickDot('.dot6', '#Text6', '#sunID', 180-45);
clickDot('.dot7', '#Text7', '#sunID', 315);
clickDot('.dot8', '#Text8', '#sunID', 45);

$( '.dot1' ).hover(
	function() {
	  $( this ).toggleClass( "active");
	  $( this ).css({transform: scale(1.2)});
	}
  );

/*
if($('#Text2').is(":visible")) {
	clickDot('.project1', '#projectID1', '#projectWheel', 180);
	clickDot('.project2', '#projectID2', '#projectWheel', 0);
	clickDot('.project3', '#projectID3', '#projectWheel', 90);
	clickDot('.project4', '#projectID4', '#projectWheel', 270);
	clickDot('.project5', '#projectID5', '#projectWheel', 180+45);
	clickDot('.project6', '#projectID6', '#projectWheel', 180-45);
	clickDot('.project7', '#projectID7', '#projectWheel', 360-45);
	clickDot('.project8', '#projectID8', '#projectWheel', 45);
}*/
}

function clickDot(obj, textObj, circleObj, _rotateBy) {
	$(obj).on('click', function() {
		hideAllTexts();
		/*if(circleObj == '#projectWheel') {
			rotateProjectWheel(_rotateBy);
		} else {*/
			rotateCircle(_rotateBy);
		//}
		if($(textObj).is(":visible")) {
			$(textObj).hide(500);
		} else {
			$(textObj).show(1000);
			//$(textObj).css({ transform: });
		}
	});
}

function hideAllTexts() {
	var textCounter = 0;
	for(textCounter = 0; textCounter < 9; textCounter++) {
		$('#Text' + textCounter).hide(1000);
	}
}
function rotateCircle(rotateBy) {

	currentRotation = getRotationDegrees($('.sun'));
	//alert(currentRotation%360+" "+rotateBy);
	if(currentRotation%360 != rotateBy) {
		//alert(currentRotation+" "+rotateBy)
		$("#sunID").css( { transform: 'rotate('+rotateBy+'deg)'});
			$("#dotID1").css({ transform: 'rotate(-'+rotateBy+'deg)'});
			$("#dotID2").css({ transform: 'rotate(-'+rotateBy+'deg)'});
			$("#dotID3").css({ transform: 'rotate(-'+rotateBy+'deg)'});
			$("#dotID4").css({ transform: 'rotate(-'+rotateBy+'deg)'});
			$("#dotID5").css({ transform: 'rotate(-'+rotateBy+'deg)'});
			$("#dotID6").css({ transform: 'rotate(-'+rotateBy+'deg)'});
			$("#dotID7").css({ transform: 'rotate(-'+rotateBy+'deg)'});
			$("#dotID8").css({ transform: 'rotate(-'+rotateBy+'deg)'});

	}
	return;
}

function rotate45deg(targetAngle) {
	$("#sunID").css( { transform: 'rotate('+targetAngle+'deg)'});
			$("#dotID1").css({ transform: 'rotate(-'+targetAngle+'deg)'});
			$("#dotID2").css({ transform: 'rotate(-'+targetAngle+'deg)'});
			$("#dotID3").css({ transform: 'rotate(-'+targetAngle+'deg)'});
			$("#dotID4").css({ transform: 'rotate(-'+targetAngle+'deg)'});
			$("#dotID5").css({ transform: 'rotate(-'+targetAngle+'deg)'});
			$("#dotID6").css({ transform: 'rotate(-'+targetAngle+'deg)'});
			$("#dotID7").css({ transform: 'rotate(-'+targetAngle+'deg)'});
			$("#dotID8").css({ transform: 'rotate(-'+targetAngle+'deg)'});
}

function rotateProjectWheel(rotateBy) {
	
	//alert(_CURRENT_ANGLE + " " + rotateBy + " " + currentRotation);
		$("#projectWheel").css({ transform: 'rotate(' + rotateBy + 'deg)' });
		$("#projectID1").css({ transform: 'rotate('+currentRotation+'deg)'});
		$("#projectID2").css({ transform: 'rotate('+currentRotation+'deg)'});
		$("#projectID3").css({ transform: 'rotate('+currentRotation+'deg)'});
		$("#projectID4").css({ transform: 'rotate('+currentRotation+'deg)'});
		$("#projectID5").css({ transform: 'rotate('+currentRotation+'deg)'});
		$("#projectID6").css({ transform: 'rotate('+currentRotation+'deg)'});
		$("#projectID7").css({ transform: 'rotate('+currentRotation+'deg)'});
		$("#projectID8").css({ transform: 'rotate('+currentRotation+'deg)'});
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

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }

$.fn.rotationInfo = function() {
    var el = $(this),
        tr = el.css("-webkit-transform") || el.css("-moz-transform") || el.css("-ms-transform") || el.css("-o-transform") || '',
        info = {rad: 0, deg: 0};
    if (tr = tr.match('matrix\\((.*)\\)')) {
        tr = tr[1].split(',');
        if(typeof tr[0] != 'undefined' && typeof tr[1] != 'undefined') {
            info.rad = Math.atan2(tr[1], tr[0]);
            info.deg = parseFloat((info.rad * 180 / Math.PI).toFixed(1));
        }
    }
    return info;
};


/*
$('.dot1').hover(
	function() {
	  $(this).css({scale: 1.2});
	}
  );
  $('.dot2').hover(
	function() {
	  $(this).css({scale: 1.2});
	}
  );
  $('.dot3').hover(
	function() {
	  $(this).css({scale: 1.2});
	}
  );
  $('.dot4').hover(
	function() {
	  $(this).css({scale: 1.2});
	}
  );

  $('.dot1').addEventListener("mouseover", hoverAnimation());
  $('.dot2').addEventListener("mouseover", hoverAnimation());
  $('.dot1').onmouseover(hoverAnimation());
  $('.dot2').onmouseover(hoverAnimation());


  function hoverAnimation() {
	$(this).css({scale: 1.2});
  }*/