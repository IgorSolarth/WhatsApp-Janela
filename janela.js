$(function(){
	$('#fecha_janela_wp').click(function(e){
		e.preventDefault();
		$('#janela_wp').addClass('close');
		$('#abre_janela_wp').addClass('open');
		$('#fecha_janela_wp').addClass('close');
	});

	$('#abre_janela_wp').click(function(e){
		e.preventDefault();
		$('#janela_wp').removeClass('close');
		$('#abre_janela_wp').removeClass('open');
		$('#fecha_janela_wp').removeClass('close');
	});
});