$(document).ready(function(){

	    $('[data-toggle="tooltip"]').tooltip();
	    
			
     $("#brandingcontainer").hover(function(){
     	         $("#brandingtext").fadeIn(100).css("background-color", "black");
  $("#branding").fadeOut(100).css("display","none");
                  $("#brandingtext").fadeIn(100).css("visibility", "visible");

  
         $("#brandingtext").fadeIn(100).css("display", "block");

       }
         ,function(){
$("#brandingtext").css("display", "none");

$("#brandingtext").css("background-color","white");
         $("#branding").fadeIn(100).css("display","block");}
         

         
     );

     $("#websitecontainer").hover(function(){
     	         $("#websitetext").fadeIn(100).css("background-color", "black");

         $("#website").fadeOut(100).css("display","none");
                           $("#websitetext").fadeIn(100).css("visibility", "visible");

       
              $("#websitetext").fadeIn(100).css("display", "block");
}
         ,function(){
$("#websitetext").css("display", "none");
$("#websitetext").css("background-color","white");

         $("#website").fadeIn(100).css("display","block");}
         

         
     );

     $("#smmcontainer").hover(function(){
     	        $("#smmtext").fadeIn(100).css("background-color", "black");

         $("#smm").fadeOut(100).css("display","none");
                           $("#smmtext").fadeIn(100).css("visibility", "visible");

              $("#smmtext").fadeIn(100).css("display", "block");
}
         ,function(){
$("#smmtext").css("display", "none");
$("#smmtext").css("background-color","white");

         $("#smm").fadeIn(100).css("display","block");}
         


         
     );

     $("#productioncontainer").hover(function(){
     	 $("#productiontext").fadeIn(100).css("background-color", "black");

         $("#production").fadeOut(100).css("display","none");
         
              $("#productiontext").fadeIn(100).css("visibility", "visible");
}
         ,function(){
$("#productiontext").css("display", "none");
$("#productiontext").css("background-color","white");

         $("#production").fadeIn(100).css("display","block");}
         


         
     );


     $("#advertisingcontainer").hover(function(){
     	         $("#advertisingtext").fadeIn(100).css("background-color", "black");

         $("#advertising").fadeOut(100).css("display","none");
                           $("#advertisingtext").fadeIn(100).css("visibility", "visible");

              $("#advertisingtext").fadeIn(100).css("display", "block");
}
         ,function(){
$("#advertisingtext").css("display", "none");
$("#advertisingtext").css("background-color","white");

         $("#advertising").fadeIn(100).css("display","block");}
         


         
     );

     $("#ecomcontainer").hover(function(){
     	       $("#ecomtext").fadeIn(100).css("background-color", "black");

         $("#ecom").fadeOut(100).css("display","none");
                           $("#ecomtext").fadeIn(100).css("visibility", "visible");

              $("#ecomtext").fadeIn(100).css("display", "block");
}
         ,function(){
$("#ecomtext").css("display", "none");
$("#ecomtext").css("background-color","white");

         $("#ecom").fadeIn(100).css("display","block");}
         


         
     );


     $("#fincontainer").hover(function(){
     	         $("#fintext").fadeIn(100).css("background-color", "black");
  $("#fin").fadeOut(100).css("display","none");
                  $("#fintext").fadeIn(100).css("visibility", "visible");

  
         $("#fintext").fadeIn(100).css("display", "block");

       }
         ,function(){
$("#fintext").css("display", "none");

$("#fintext").css("background-color","white");
         $("#fin").fadeIn(100).css("display","block");}
         

         
     );


$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#u0").offset().top-100
    }, 2000);});
    $("#services").click(function() {
    $('html, body').animate({
        scrollTop: $("#u1").offset().top-100
    }, 2000);});
$("#clients").click(function() {
    $('html, body').animate({
        scrollTop: $("#u3").offset().top-100
    }, 2000);});
$("#careers").click(function() {
    $('html, body').animate({
        scrollTop: $("#u2").offset().top-100
    }, 2000);});
$("#course").click(function() {
    $('html, body').animate({
        scrollTop: $("#u4").offset().top-100
    }, 2000);});
$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#u5").offset().top-100
    }, 2000);});


 });

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#u0').position().top-400){
        $("#aboutuscontent").fadeIn(1500);
                $("#aboutustext").fadeIn(1500);



            }
});

