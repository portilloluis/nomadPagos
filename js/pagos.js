let checkboxContacto = $('#checkContacto'),
    textoFormaContacto = $('#formaDeContacto'),
		setRadioButtons = $('.radioElige input'),
		textoMontoDePago = $('#textoMontoDePago'),
    radiobuttonMontoTotal = $('#radiobuttonMontoTotal')

		console.log(setRadioButtons);

//En los logos de empresas, colorea el clickeado y deja en blanco los no activados
$(".ico").click(function(){
    let contenedor = $(this).parent(),
     		imagenes = contenedor.children()
    imagenes.each(function(){
         if ($(this).hasClass("active")){
             $(this).removeClass("active")
         }
    })
    $(this).addClass("active");
})

//Si el checkbox de como te gustaría que te contactaran se activa, desplegamos en texto
checkboxContacto.click(function(){
	if(checkboxContacto[0].checked == false){
		textoFormaContacto.css({
			display: "none"
		})
	} else {
		textoFormaContacto.css({
			display: "block"
		})
	}
})

//Si el radio button de elige tipo de pago esta activado, despliega texto descriptivo

setRadioButtons.click(function(){
	if( radiobuttonMontoTotal[0].checked == false ){
		textoMontoDePago.css({
			display: "none"
		})
	}	else {
		textoMontoDePago.css({
			display: "block"
		})
	}
})
