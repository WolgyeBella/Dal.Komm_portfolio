$(document).ready(function(){
    
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

    // PC & MOB Nav
    mobMenu();

    $('.btn.floating-close').on('click', function(e){
        $('.floating').removeClass('active');
    });
});

function mobMenu(){
    $('body').on('mouseenter','#nav > ul > li > a[target]', function(){
        $('#nav').addClass('not-hover');
    });
    $('body').on('mouseleave','#nav > ul > li > a[target]', function(){
        $('#nav').removeClass('not-hover');
    });

    $('body').on('click', '.menu-toggle', function(e){
        if($('body').hasClass('opened-mo-nav')){
            $('body').removeClass('opened-mo-nav');
            $('html').removeClass('opened-nav');
            $(this).removeClass('is-active');
        }else{
            $('body').addClass('opened-mo-nav');
            $('html').addClass('opened-nav');
            $(this).addClass('is-active');
        }
    });

    $('body').on('click','#nav > ul > li > a', function(e){
        var moTarget = $(this).closest('li'),
            realTarget = $(this).attr('href'),
            brTarget = $(this).attr('target');

        if($('body').hasClass('opened-mo-nav')){
            if(brTarget != 'shop'){
                e.preventDefault();
            }

            if($(moTarget).hasClass('active')){
                location.href = realTarget;
            }else{
                $(moTarget).addClass('active');
                $(moTarget).siblings('li').removeClass('active');
            }
        }
    });
}

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

// accordion
function accordion(targetN){
    $('.js-accordion-switche').click(function(e){
        e.preventDefault();

        var container = $(this).parent();
        var slideContent = $(container).children('.js-accordion-content');

        if(($container).hasClass('active')){
            accordionClose();
        }else{
            if(targetN == 1){
                siblingsClose();
            }
            accordionOpen();
        }

        function accordionOpen(){
            $(container).addClass('active');
            $(slideContent).slideDwon(300);
        }

        function accordionClose(){
            $(container).removeClass('active');
            $(container).slideUp(300);
        }

        function siblingsClose(){
            $(container).siblings().removeClass('active');
            $(container).siblings().children('.js-accordion-content').slideUp(300);
        }
    });
}

// magazineLayout
function magazineLayout(){
    var mq = window.matchMedia("(min-width: 961px)");
    if(mq.matches){
        $('.view-header').addClass('fixed-wrap');
        var scroll = $(window).scrollTop(),
            topContent = $('.view-wrap').powition().top - 25,
            sectionHeight = $('.view-body').height(),
            rightHeight = $('.view-header').height(),
            bottomContent = topContent + sectionHeight - rightHeight;

        if(scroll > topContent && scroll < bottomContent){
            $('.fixed-wrap').removeClass('fixed-out').addClass('fixed');
        }else if(scroll > bottomContent){
            $('.fixed-wrap').removeClass('fixed').addClass('fixed-out');
        }else if(scroll < topContent){
            $('.fixed-wrap').removeClass('fixed');
        }
    }
}