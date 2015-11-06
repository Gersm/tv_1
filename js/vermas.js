$(document).ready(function() {
 
	$("#integrantes>div").click(function() {
		if ($('#integrantes>div>p').text() == "VER TODOS...!") {
			$('#integrantes>div>p').text("VER MENOS...!");
			$('#integrantes .oculto').css( "display", "inline-block" );
		}else{
			$('#integrantes>div>p').text("VER TODOS...!");
			$('#integrantes .oculto').css( "display", "none" );
		};
	});
	$('#integrantes>div').hover(function(){
		$('#integrantes>div').css( "cursor", "pointer" );
	});
});