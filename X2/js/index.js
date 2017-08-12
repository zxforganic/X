var i = self.setInterval("show()", 30);
var num = 0;
function show(){
	document.getElementById("number").innerHTML = num + "%";
	num++;

	if(num == 101){
		window.clearInterval(i);
		window.location.href = "slider.html";
	}
}