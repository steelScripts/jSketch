$(document).ready(function(){
	//Grid Generator
	for(i = 0; i < 16; i++){
		for(j = 0; j < 16; j++) {
			
			$("#container").append("<div class='grid'></div>");
			if(j == 15 && i != 15){$("#container").append("<br>");}
		}
	}
	//CSS Rules
	$("#button").css({
		"clear":"right",
		"width": "3em",
		"height":"1em",
		"border": "2px solid white",
		"border-radius":"3px",
		"background-color":"teal"
	})
	$("#button").html("Clear");
		
	$("#container").css({
		"width":"100%"
	});
	$(".grid").css({
				"float":"left",
				"border":"1px solid black",
				//"margin":".5em",
				"width":"1em",
				"height":"1em"
			});
	//Functions
	$(".grid").hover(function(){
		var r = Math.floor(Math.random() * 255 + 1);
		var g = Math.floor(Math.random() * 255 + 1);
		var b = Math.floor(Math.random() * 255 + 1);
		$(this).css({
		  "background-color": "rgb("+r+","+g+","+b+")",
		  "border-color": "rgb("+r+","+g+","+b+")"
		});
	});
	$("#button").click(function(){
		$(".grid".css("background-color", "none");
	});
	
	
	
	
});
