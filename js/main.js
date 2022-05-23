
$(document).ready(function(){
    function mobMenu(){
        $('body').on('mouseenter','#nav > ul > li > a[target]', function(){
            $('#nav').addClass('not-hover');
        });
        $('body').on('mouseleave','#nav > ul > li > a[target]', function(){
            $('#nav').removeClass('not-hover');
        });
    } 
});