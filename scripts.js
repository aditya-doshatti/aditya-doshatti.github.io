(function() {
    var windowH = $(window).height(),
        documElem = $(document),
        slideDownPage = $('.slide-down-page'),
        content = $('.content'),
        btns = $('.btn'),
        animSpeed = 500;
    
    slideDownPage.css({
        height: windowH + 'px',
        top: -windowH + 'px'
    });
    
    btns.on('click', function(e) {
        if ( $(this).hasClass('open') ) {
            slideDownPage.animate({'top': 0}, animSpeed);
            content.animate({'margin-top': windowH + 'px'}, animSpeed);
        }
        else {
            slideDownPage.animate({'top': -windowH + 'px'}, animSpeed);
            content.animate({'margin-top': 0}, animSpeed);
        }
        e.preventDefault();
    });
    
    documElem.on('scroll', function() {
        if ( $(this).scrollTop() > slideDownPage.height() && slideDownPage.css('top') === '0px' ) {
            slideDownPage.css('top', -windowH + 'px');
            content.css('margin-top', 0);
            documElem.scrollTop(0);
        }
    });
})();      
$window.on('scroll', revealOnScroll);
(function revealOnScroll() {
    var scrolled = $window.scrollTop(), win_height_padded = $window.height() * 1.1;
    $('.revealOnScroll:not(.animated)').each(function(){
        var $this = $(this), offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
            $this.addClass('animated ' + $this.data('animation'))
        }
    });
    $('.revealOnScroll.animated').each(function (index){
        var $this = $(this), offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
            $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
        }
    });
})();