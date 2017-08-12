$(function(){
    $('#slider').fullpage({
    	afterLoad: function(anchorLink, index){
    		if (index == 2) {
    			show(".page" + 2);
    		}
    		if (index == 3) {
    			show(".page" + 3);
    		}
    		if (index == 4) {
    			show(".page" + 4);
    		}
    		if (index == 5) {
    			show(".page" + 5);
    		}
    		if (index == 6) {
    			show(".page" + 6);
    		}
    		if (index == 7) {
    			show(".page" + 7);
    		}
    		if (index == 8) {
    			show(".page" + 8);
    		}
    		if (index == 9) {
    			show(".page" + 9);
    		}
    		if (index == 10) {
    			show(".page" + 10);
    		}
    		if (index == 11) {
    			show(".page" + 11);
    		}
    		if (index == 12) {
    			show(".page" + 12);
    		}
    		if (index == 13) {
    			show(".page" + 13);
    		}
    		if (index == 14) {
    			show(".page" + 14);
    		}
    		if (index == 15) {
    			show(".page" + 15);
    		}
    		if (index == 16) {
    			show(".page" + 16);
    		}
    	},
    	onLeave: function(index, direction){
    		if (index == 2) {
    			hide(".page" + 2);
    		}
    		if (index == 3) {
    			hide(".page" + 3);
    		}
    		if (index == 4) {
    			hide(".page" + 4);
    		}
    		if (index == 5) {
    			hide(".page" + 5);
    		}
    		if (index == 6) {
    			hide(".page" + 6);
    		}
    		if (index == 7) {
    			hide(".page" + 7);
    		}
    		if (index == 8) {
    			hide(".page" + 8);
    		}
    		if (index == 9) {
    			hide(".page" + 9);
    		}
    		if (index == 10) {
    			hide(".page" + 10);
    		}
    		if (index == 11) {
    			hide(".page" + 11);
    		}
    		if (index == 12) {
    			hide(".page" + 12);
    		}
    		if (index == 13) {
    			hide(".page" + 13);
    		}
    		if (index == 14) {
    			hide(".page" + 14);
    		}
    		if (index == 15) {
    			hide(".page" + 15);
    		}
    		if (index == 16) {
    			hide(".page" + 16);
    		}
    	}
    });
});
function show(element){
	setTimeout(function(){
		$(element).find("img").css({"display" : "block"}),
		$(element).find("img").addClass("show")
	}, 300);
}
function hide(element){
	setTimeout(function(){
		$(element).find("img").css({"display" : "none"}),
		$(element).find("img").removeClass("show")
	}, 500);
}