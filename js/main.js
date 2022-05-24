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

// scroll
var headerFix = 120,
    gnbScrollTop = 0,
    delta = 80,
    windowWith = $(window).width();
    if(windowWith < 120){
        var headerFix = 80;
    }

$(window).on('load scroll', function(e){
    var st = $(this).scrollTop();

    scrollCheck();

    if(Math.abs(gnbScrollTop - st) <= delta) return;

    // header Tix
    if(st > headerFix){
        $('#header').addClass('fixed');
    }else{
        $('#header').removeClass('fixed');
    }

    // sscroll up/down
    if((st > gnbScrollTop) && (gnbScrollTop > 0)){
        $('body').addClass('scroll-down').removeClass('scroll-up');
    }else{
        $('body').addClass('scroll-up').removeClass('scroll-down');
    }
    gnbScrollTop = st;
});

// scrollCheck
function scrollCheck(){
    var winsc = $(this).scrollTop();
    if(winsc == 0){
        $('body').addClass('scroll-zero').removeClass('scroll-has');
    }else{
        $('body').addClass('scroll-has').removeClass('scroll-zero');
    }
}