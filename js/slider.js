var i;
var j = 0;
var h = document.getElementById("two").offsetHeight;

var startx, starty;
document.addEventListener("touchstart", function(e){
	var touch = e.targetTouches[0];
	startPos = {x: touch.pageX, y: touch.pageY};
}, false);

document.addEventListener("touchmove", function(e){
	// e.preventDefault();	
	var touch = e.targetTouches[0];
	endPos = {x: touch.pageX, y: touch.pageY};
	var isScrolling = startPos.y - endPos.y;
	if (isScrolling > 0) {
		i = self.setInterval("up()", 0);	
	}else if(isScrolling < 0){
		i = self.setInterval("down()", 0);
	}
	//alert(startx + "--" + starty);
}, false);

function up(){
	document.body.scrollTop = j++;
	if ((j % h) == 0) {
		window.clearInterval(i);
	}
}

function down(){
	document.body.scrollTop = j--;
	if ((j % h) == 0) {
		window.clearInterval(i);
	}
}