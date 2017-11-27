$(document).ready(function() {

	$(".showless").click(function(){//jquery Function Number 1
		$("#aboutme").fadeOut()//jquery Function Number 2
	}); 

	$(".showmore").click(function(){
		$("#aboutme").fadeIn() //jquery Function Number 3
	});

	$("button").click(function(){
		$("p").text("Thanks for visiting!");//jquery Function Number 4
	});

	$("#aboutme").hover(function(){//jquery Function Number 5
    	$(this).css("background-color", "pink");//jquery Function Number 6
   	 	});
});
