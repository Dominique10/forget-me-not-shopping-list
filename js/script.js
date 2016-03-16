$(document).ready(function(){

	$('.myForm').submit(function(e) {
		/*Remove instrustions*/
		$("#instruction").remove();
		/*Value of textbox into textBox var*/
		var textBox = $("#item-here").val();
		$("#item-here").val('');
		/*Adds value from textBox and adds to list*/
		$("ul").append("<li><i class='fa fa-square-o'></i><i class='fa fa-trash'></i>" + textBox + "</li>");
		/* Remove form default*/
		e.preventDefault();
	})
	/*Removes item when trash can is clicked*/
	$('ul').on('click', '.fa-trash', function(event){
		$(this).closest('li').remove();

	})
	$('ul').on('click', 'i', function(event){
 //  // fires when any I are clicked on
 //  // including I that aren't on the page when it is initially loaded
  if ($(this).closest("i").hasClass("fa fa-square-o")) 
  	{
  		$(this).closest('i').removeClass("fa fa-square-o");
  		$(this).closest('i').addClass("fa fa-check-square-o");
  		$(this).closest('li').css('text-decoration','line-through;');
  	}
   else if ($(this).closest("i").hasClass("fa fa-check-square-o"))
   {
   		$(this).closest('i').removeClass("fa fa-check-square-o");
  		$(this).closest('i').addClass("fa fa-square-o");
  	}
	});
});