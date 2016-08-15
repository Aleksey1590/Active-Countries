
// AJAX request
$.ajax({url: "/calcShare", dataType:'json' }).done(
	function(imARandomName){
		$('#id1').text(imARandomName.a); //Left it for debugging. Feel free to carefully remove it, but make sure to test if after you do that
})

