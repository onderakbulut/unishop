jQuery(function() { 

    const body = $('body');

    /* sidebar start */
    
    body.on("click", ".push-menu",function(e){
        openMenu();
    });
    body.on("click", ".mask-overlay",function(e){
        closeMenu();
    });
    body.on("click", ".close-btn",function(e){
        closeMenu();
    });
    
    openMenu = function () {
        $(".mobile-menu").addClass("show");
        $(".mask-overlay").addClass("show");
    }
    closeMenu = function () {
        $(".mobile-menu").removeClass("show");
        $(".mask-overlay").removeClass("show");
    }
    /* sidebar end */

    /* cart popup start */
    body.on('click', 'button.plus , a.plus , button.minus , a.minus', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const $inputTag = $(this).closest('.quantity').find('.qty');
        if ($inputTag) {
            let value = $inputTag.val() ? parseInt($inputTag.val(), 10) : 0
              , max = $inputTag.data('max') || 100
              , min = $inputTag.data('min') || 0
              , step = $inputTag.data('step') || 1;
            if ($(this).hasClass('plus')) {
                value = value + step <= max ? value + step : max;
            } else {
                value = value - step >= min ? value - step : min;
            }
            $inputTag.val(value).trigger('change');
        }
    });

    body.on("click", ".push-cart",function(e){
        openCart();
    });
    body.on("click", ".mask-overlay",function(e){
        closeCart();
    });
    body.on("click", ".close-cart",function(e){
        closeCart();
    });

    openCart = function () {
        $(".cart-popup").addClass("show");
        $(".mask-overlay").addClass("show");
		body.addClass("overflow-hidden");
    }
    closeCart = function () {
        $(".cart-popup").removeClass("show");
        $(".mask-overlay").removeClass("show");
		body.removeClass("overflow-hidden");
    }
    /* cart popup end */

    
    /* searchbox start */
	$("body").on("click",".push-search",function(){
		if( isOpened() ) {
			closeSearch();
		} else {
			setTimeout( function() {
				openSearch();
			}, 10);
		}
	});
	$("body").on("click",function(event){
		if ( $(event.target).closest(".search-wrapper").length ) return;
		if( isOpened() ) {
			closeSearch();
		} 
	});
	var searchWrapper = $('.search-wrapper');
	var openSearch = function() {
		var offset = $('.header').outerHeight();

		searchWrapper.css('top', offset);
		searchWrapper.addClass('active');

		$('body').addClass('search-opened');

		setTimeout(function() {
			searchWrapper.find('input[type="text"]').focus();
		}, 300);
	}
	var closeSearch = function() {
		$('body').removeClass('search-opened');
		searchWrapper.removeClass('active');
	};
	var isOpened = function() {
		return $('body').hasClass('search-opened');
	};
	/* searchbox end */

    /* home slider start */
    if($(".homeSlider").length){
		var animEndEv = 'webkitAnimationEnd animationend';

		var homeSlider = new Swiper('.homeSlider', {
			loop: true,
			fadeEffect: { crossFade: true },
			effect: 'fade',
			spaceBetween:50,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			on: {
				slideChangeTransitionStart: function (s) {
					
					var currentSlide = $(s.slides[s.activeIndex]);
					var elems = currentSlide.find(".animate__animated");
					
					elems.each(function() {
						var $this = $(this);
						var animationType = $this.data('animation');
						$this.addClass(animationType, 100).on(animEndEv, function() {
							$this.removeClass(animationType);
						});
					});
				},
				slideChangeTransitionEnd: function(s) {
					var currentSlide = $(s.slides[s.activeIndex]);

				}
			},
		});
	}
    /* home slider end */
	
	/* product slider start */
	if($(".product-slider").length){
			
		var swiper = new Swiper(".product-slider", {
			slidesPerView:4,
			slidesPerGroup:2,
			loop:true,
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: ".swiper-pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
					slidesPerGroup:2,
					spaceBetween: 10
				},
				768: {
					slidesPerView: 3,
					slidesPerGroup:3,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 30
				}
			}
		});
	}
	/* product slider end */

	/* blog slider start */
	if($(".blog-slider").length){
		var swiper = new Swiper(".blog-slider", {
			loop:false,
			spaceBetween: 30,
			allowTouchMove : true,
			simulateTouch:true,
			pagination: {
				el: ".swiper-pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					slidesPerGroup:1,
					spaceBetween: 10,
					allowTouchMove : true,
				},
				768: {
					slidesPerView: 2,
					slidesPerGroup:2,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
					allowTouchMove : false,
					simulateTouch:false,
				}
			} 
		});
	}
	/* blog slider end */

	/* instagram slider start */
	if($(".insta-slider").length){
		var swiper = new Swiper(".insta-slider", {
			loop:false,
			spaceBetween: 0,
			pagination: {
				el: ".swiper-pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
					slidesPerGroup:2,
				},
				768: {
					slidesPerView: 3,
					slidesPerGroup:3,
				},
				1024: {
					slidesPerView: 6,
				}
			} 
		});
	}
	/* instagram slider end */

	/* footer start */
	$(".footer [data-bs-toggle]").next().on('hide.bs.collapse',function(){
		$(this).parent().removeClass("menu-open");
	});
	$(".footer [data-bs-toggle]").next().on('show.bs.collapse',function(){
		$(this).parent().addClass("menu-open");
	});
	/* footer end */

	/* filterbar start */
	body.on("click", ".filter-toggler",function(e){
        openFilter();
		e.preventDefault();
		e.stopPropagation();
    });
    body.on("click", ".mask-overlay",function(e){
        closeFilter();
    });
    body.on("click", ".close-filter",function(e){
        closeFilter();
    });

    openFilter = function () {
        $(".filterbar").addClass("show");
        $(".mask-overlay").addClass("show");
		body.addClass("overflow-hidden");
    }
    closeFilter = function () {
        $(".filterbar").removeClass("show");
        $(".mask-overlay").removeClass("show");
		body.removeClass("overflow-hidden");
    }
    
});