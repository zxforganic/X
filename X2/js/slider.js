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
            if (index == 17) {
                $(".page17 img.edge").css({"display" : "block"});
                $(".page17 img.edge").css({"animation" : "edge 2s"});

                setTimeout(function(){
                    $(".page17 img.explode1").css({"display" : "none"});
                    $(".page17 img.edge").css({"display" : "none"});

                    $(".page17 img.Lpart").css({"animation" : "Lpart 2s"});  
                    $(".page17 img.Rpart").css({"animation" : "Rpart 2s"});
                    $(".page17 img.Bpart").css({"animation" : "Bpart 2s"});    
                }, 2000);
                setTimeout(function(){
                    $(".page17 img.Lpart").css({"display" : "none"});
                    $(".page17 img.Rpart").css({"display" : "none"}); 
                    $(".page17 img.Bpart").css({"display" : "none"});  
                      
                }, 4000);
                setTimeout(function(){
                    $(".page17 img.p19bcg").css({"display" : "block"}); 
                }, 3000);
                setTimeout(function(){
                    $(".page17 img.uicon").css({"display" : "block"});
                    $(".page17 img.logo").css({"animation" : "logo 1s"});
                    $(".page17 img.user01").css({"animation" : "user01 1s"});
                    $(".page17 img.user04").css({"animation" : "user04 1s"});
                    $(".page17 img.user13").css({"animation" : "user13 1s"});
                    $(".page17 img.user15").css({"animation" : "user15 1s"});
                    $(".page17 img.user18").css({"animation" : "user18 1s"});
                    $(".page17 img.user28").css({"animation" : "user28 1s"});
                    $(".page17 img.user32").css({"animation" : "user32 1s"});
                    $(".page17 img.user33").css({"animation" : "user33 1s"});
                }, 4000);
                setTimeout(function(){
                    $(".page17 img.bcg").css({"display" : "block"});
                    $(".page17 img.text").css({"display" : "block"});
                    $(".page17 img.button").css({"display" : "block"});
                }, 6000);
                
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
function last(){
    $(".page17 img.text").css({"display" : "none"});
    $(".page17 img.button").css({"display" : "none"});

    $(".page17 img.last").css({"display" : "block"});
}