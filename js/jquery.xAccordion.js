// JavaScript jQuery Plugin xAccordeon - Alexandre Mattos
(function(){
	
	//Definicao do nome do plugin e chamada com opcoes
	jQuery.fn.xAccordion = function(options){	
	
		//Seta os valores default
		var defaults = {
			openClose:false,
			slide:false,
			speed:100,
			openItens:true,
			activeItemName: "active"
		}
		
		var options =  $.extend(defaults, options);
		
		//Inicializacao do plugin
		return this.each(function(){
			
			//Objeto
			var obj = jQuery(this);
			
			//Seta o plugin principal
			obj.addClass('xAccordion');

			var buttonFx = obj.find("> ul > li > a");
			var box = obj.find("> ul > li > div.contentSlider");

			// Verificação se os itens irão vir abertos ou não
			if ( options.openItens == false ){
				box.hide();
			}else{
				box.hide();
				box.parent().eq(0).find("div.contentSlider").show();
				obj.find("> ul > li").eq(0).addClass(options.activeItemName);
			}

			// Evento de abrir e fechar
			buttonFx.click(function(event) {
				
				var btnSelecionado = jQuery(this);
				
				//OPEN CLOSE TRUE
				if ( options.openClose == true ) {

					//Seta o item marcado
					obj.find("> ul > li").removeClass(options.activeItemName);
					btnSelecionado.parent().addClass(options.activeItemName);
					
					if ( options.slide == true ) {
						box.slideUp(options.speed);
						btnSelecionado.parent().find("div.contentSlider").addClass("selecionado").slideDown(options.speed);
					}else{
						box.hide();
						btnSelecionado.parent().find("div.contentSlider").show();
					}
				}else{

					if ( btnSelecionado.parent().hasClass(options.activeItemName) ){
						btnSelecionado.parent().removeClass(options.activeItemName);
					}else{
						btnSelecionado.parent().addClass(options.activeItemName);
					}

					if ( options.slide == true ) {
						btnSelecionado.parent().find("div.contentSlider").slideToggle(options.speed);
					}else{
						btnSelecionado.parent().find("div.contentSlider").toggle();
					}
				}

				

			});

		}); //Fim do processo
	
	}	
	
})(jQuery);
	
jQuery(document).ready(function($) {
	jQuery(".accordion").xAccordion();
});