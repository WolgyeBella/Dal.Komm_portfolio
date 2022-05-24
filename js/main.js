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

    getViewports();
    $(window).on('resize',function(){
        getViewports();
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

// navCurrent
function navCurrent(dep1, dep2){
    var dep1eq = dep1 - 1;
    var dep2eq = dep2 - 1;
    var nav = $('#header nav > ul > li');
    var nav2dep = $(nav).eq(dep1eq).find('li');

    if(!dep1 == ""){
        $(nav).eq(dep1eq).addClass('current');
    }
    if(!dep2 == ""){
        $(nav2dep).eq(dep2eq).addClass('current');
    }
}

// getViewports
function getViewports(){
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        headerHeight = $('#header').height(),
        navHeight = $('#menu').height(),
        conHeight = windowHeight - navHeight - navHeight;

    if(windowWidth > 750){
        $('html').addClass('is-desktop').removeClass('is-mobile');
    }else{
        $('html').addClass('is-mobile').removeClass('is-desktop');
    }

    if($('html').hasClass('is-mobile')){
        if($('#content').hasClass('splash')){
            $('#content').css({'min-height':windowHeight - headerHeight});
        }else{
            $('#content').css({'min-height':conHeight});
        }
    }
}