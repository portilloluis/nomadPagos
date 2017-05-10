$(".ico").click(function(){
    var contenedor = $(this).parent();
    var imagenes = contenedor.children();
    imagenes.each(function(){
         if ($(this).hasClass("active")){
             $(this).removeClass("active")
         }
    })
    $(this).addClass("active");
})
