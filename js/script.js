$(document).ready(function(){

	$('.myForm').submit(function(e) {
		/*Remove instrustions*/
		$("#instruction").remove();
		/*Value of textbox into textBox var*/
		var textBox = $("#item-here").val();
		$("#item-here").val('');
		/*Adds value from textBox and adds to list*/
		$("ul").append("<li><span class='deleteMe'>X</span>" + textBox + "</li>");
		/* Remove form default*/
		e.preventDefault();
	})

	$('.deleteMe').click(function(){
		$(this).closest('li').remove();
	})
	$('ul').on('click', 'li', function(event){
 //  // fires when any LIs are clicked on
 //  // including LIs that aren't on the page when it is initially loaded
  // var itemText = $(this).closest('li').clone();
  // $(this).text(itemText+" -Item Collected");
  if ($(this).closest("li").hasClass("cross")) {
  	$(this).closest('li').removeClass("cross");
  	$(this).closest('li').css('color:white');
  }
   else
   $(this).closest('li').addClass("cross");
 	 $(this).closest('li').css('color:grey');
	})

	$('ul').on('click', '.deleteMe', function(event){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
  $(this).closest('li').remove();
	});
});