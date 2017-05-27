$(document).ready(function(){
	
	//Generate Grid with initial white background-color
	for(i = 0; i < 16; i++){
		for(j = 0; j < 16; j++) {
			$("#container").append("<div class='grid' data-color='255,255,255' data-changed='false'></div>");
			if(j == 15){$("#container").append("<br>");}
		}
	}
	//CSS Rules
	$("button").css({
		"clear":"right",
		"border": "2px solid white",
		"border-radius":"5px",
		"background-color":"teal",
		"color":"white",
		"font":"1em helvetica"
	})
		
	$("#container").css({
		"width":"100%"
	});
	$(".grid").css({
		"float":"left",
		"border":"1px solid black",
		"margin-bottom":"-1em",
		"width":"1em",
		"height":"1em"
	});		
	//Functions	
	$(".grid").hover(function(){
		var changed = $(this).attr("data-changed"),
			dataColor = $(this).attr("data-color");
		if(changed != "true"){
			var r = Math.floor(Math.random() * 255),
				g = Math.floor(Math.random() * 255),
				b = Math.floor(Math.random() * 255),
				newColor =  r+","+g+","+b
			$(this).attr("data-color", newColor);
			$(this).css({			
			  "background-color": "rgb("+newColor+")",
			  "border-color": "rgb("+newColor+")"
			});
			$(this).attr("data-changed","true");
		} 
		else {
			var commas = 2, r = '', g = '', b = '';
			
			for(i = 0; i < dataColor.length; i++){
				if(dataColor.charAt(i) == ',')
					{commas--}
				else if(dataColor.charAt(i) != ',' && commas == 2) 
					{r += dataColor.charAt(i);}					
				else if(dataColor.charAt(i) != ',' && commas == 1)
					{g += dataColor.charAt(i);}					
				else if(dataColor.charAt(i) != ',' && commas == 0)
					{b += dataColor.charAt(i);}					
			}
			//Converts RGB back to integers
			var rTemp = r.valueOf();
			var gTemp = g.valueOf();
			var bTemp = b.valueOf();
			
			//Darkens tile by 10%
			r = rTemp - Math.floor(rTemp / 10);
			g = gTemp - Math.floor(gTemp / 10);
			b = bTemp - Math.floor(bTemp / 10);
			
			//Logs new color to array and sets it as the background-color
			var newColor =  r+","+g+","+b;
			$(this).attr("data-color", newColor);
			$(this).css({			
			  "background-color": "rgb("+newColor+")",
			  "border-color": "rgb("+newColor+")"
			});
		}
		
	});
	$("button").click(function(){
		$(".grid").attr("data-changed","false");		
		$(".grid").attr("data-color","255,255,255");
		$(".grid").css({
			"background-color": "rgb(255,255,255)",
			"border-color": "rgb(0,0,0)"
		});							
	});
});
