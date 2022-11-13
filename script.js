jQuery('document').ready(function($){
        let menubtn = $('.show-icon'), 
        menu = $(".f_cabeza ul");
        menubtn.click(function(){
            if(menu.hasClass('show')){
                menu.removeClass('show');
            }else{
                menu.addClass('show');
            }
            
        });
});
//almacenando slider en una variable
let slider = $('#slider');
//almacenado los botones en una variable
let siguiente = $('#btn-1');
let anterior = $('#btn-2');

$('#slider Section:last').insertBefore('#slider section:first');
//Mostrar la primera imagen
slider.css('margin-left', '-'+100+'%');
//Funcion para mover de un lado a otro
function moverD(){
     slider.animate({
        marginLeft:'-'+200+'%'
     },700, function(){
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left', '-'+100+'%');
     });
}
function moverI(){
    slider.animate({
       marginLeft:0
    },700, function(){
       $('#slider section:last').insertBefore('#slider section:first');
       slider.css('margin-left', '-'+100+'%');
    });
}

anterior.on('click',function(){
    moverD();
});
siguiente.on('click',function(){
    moverI();
});
function automatico(){
    intervaloDeTiempo = setInterval(function(){
        moverD();
    }, 5000)
}
automatico();