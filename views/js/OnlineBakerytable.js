$(function(){
 $(document).ready(function(e){//The key from the keyboard is lifted
   $( "#searchby" ).click(function() {//When the button is clicked
  //alert( "Handler for .click() called." );
     var parameters = { search: $(this).val() };//search:Search data
     console.log("parameters: " + parameters);
       $.get( '/searching',parameters, function(data) {
       $('#results').html(data);//Place to put the result
       console.log("data: " + data);
     });
    });
 });
});
//Display the table in the HTML
// function draw_table()
// {
// 	//$("#tablewithall").empty();
// 	$.getJSONuncached = function (url)
// 	{
// 		return $.ajax(
// 		{
// 			url: url,
// 			type: 'GET',
// 			cache: false,
// 			success: function (html)
// 			{
// 				$("#tablewithall").append(html);
// 				select_row();
// 			}
// 		});
// 	};
// 	$.getJSONuncached("/finalproducts")
// };
//<!-- This function takes the information provided when the row is selected and sends to the next function
// function select_row()
// {
// 	$("#menuTable tbody tr[id]").click(function ()
// 	{
// 		$(".selected").removeClass("selected");
// 		$(this).addClass("selected");
// 		var section = $(this).prevAll("tr").children("td[colspan='4']").length - 1;
// 		var finalProduct = $(this).attr("id") - 1;
// 		delete_row(section, finalProduct);
// 	})
// };
//Send back to the fron-end the informationn after update it with the deleted one.
// function delete_row(sec, ent)
// {
// 	$("#delete").click(function ()
// 	{
// 		$.ajax(
// 		{
// 			url: "/post/delete",
// 			type: "POST",
// 			data:
// 			{
// 				section: sec,
// 				finalProduct: ent
// 			},
// 			cache: false,
// 			success: setTimeout(draw_table, 1000)
// 		})
// 	})
// };
// // Call the function that display the table in real-time without having to reload the page
// $(document).ready(function ()
// {
// 	draw_table();
// });