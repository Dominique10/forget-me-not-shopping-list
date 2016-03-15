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

	// $('.fa-trash').click(function(){
	// 	$(this).closest('li').remove();
	// })
	$('ul').on('click', '.fa-trash', function(event){
		$(this).closest('li').remove();

	})
	$('ul').on('click', 'i', function(event){
 //  // fires when any LIs are clicked on
 //  // including LIs that aren't on the page when it is initially loaded
  // var itemText = $(this).closest('li').clone();
  // $(this).text(itemText+" -Item Collected");
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

	// $('ul').on('click', '.deleteMe', function(event){
 //  // fires when any LIs are clicked on
 //  // including LIs that aren't on the page when it is initially loaded
 //  $(this).closest('li').remove();
	// });
});