$(document).ready(function(){
    $(window).resize(function(){
        $('.navbar-brand').css({
            'left': ($('body').width()-$('.navbar-brand').outerWidth())/2+'px'
        })
    })
    $(window).trigger('resize');
    $(".banner").css('height',window.innerHeight-$('nav.navbar').outerHeight()+'px');    
})