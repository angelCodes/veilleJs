$(document).ready(function(){

			$("#link1").click(function(){
				$path=$("#box1").offset().top;

				$('body').animate({
					scrollTop:$path
				},1000);
			});
				$("#link2").click(function(){
				$path=$("#box2").offset().top;

				$('body').animate({
					scrollTop:$path
				},1000);
			});
					$("#link3").click(function(){
				$path=$("#box3").offset().top;

				$('body').animate({
					scrollTop:$path
				},1000);
			});
						$("#link4").click(function(){
				$path=$("#box4").offset().top;

				$('body').animate({
					scrollTop:$path
				},1000);
			});
 $('.collapsible').collapsible();
						
		});

