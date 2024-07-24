(function($) {


    $(document).ready(function() {
        //Integracao
        var integracaoExterna = false;

        $('.iframe').css('height', IframeAltura() + 'px');




    })

    "use strict";

    // Header Scrolling Set White Background
    scrollNavBar();

    // Window Resize Mobile Menu Fix
    mobileNav();


    function IframeAltura() {
        var altura = $(window).height();

        return altura;
    }



    // Scroll animation init
    // window.sr = new scrollReveal();


    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
        $(".menu-trigger").on('click', function() {
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }
    var verificaMobile = $(window).width();
    if (verificaMobile <= 411) {

        $('.main-nav').removeClass('d-flex');
        $('.main-nav').removeClass('justify-content-between');
    }

    // Menu elevator animation
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var width = $(window).width();
                if (width < 991) {
                    $('.menu-trigger').removeClass('active');
                    $('.header-area .nav').slideUp(200);
                }
                $('html,body').animate({
                    scrollTop: (target.offset().top) - 30
                }, 700);
                return false;
            }
        }
    });



    // Home number counterup
    if ($('.count-item').length) {
        $('.count-item strong').counterUp({
            delay: 10,
            time: 1000
        });
    }


    // Blog cover image
    if ($('.blog-post-thumb').length) {
        $('.blog-post-thumb .img').imgfix();
    }


    // Page standard gallery
    if ($('.page-gallery').length && $('.page-gallery-wrapper').length) {
        $('.page-gallery').imgfix({
            scale: 1.1
        });

        $('.page-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
            }
        });
    }


    // Page loading animation
    $(window).on('load', function() {
        $(".loader-wrapper").animate({
            'opacity': '0'
        }, 600, function() {
            setTimeout(function() {
                // Home Parallax
                if ($('#download').length) {
                    $('#download').parallax({
                        imageSrc: 'assets/images/parallax.jpg',
                        zIndex: '1'
                    });
                }

                // Home Parallax Subscribe
                if ($('#subscribe').length) {
                    $('#subscribe').parallax({
                        imageSrc: 'assets/images/photos/parallax-subscribe.jpg',
                        zIndex: '1'
                    });
                }
                $(".loader-wrapper").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });


    // Header Scrolling Set White Background
    $(window).on('scroll', function() {
        scrollNavBar();
    });


    // Window Resize Mobile Menu Fix
    $(window).on('resize', function() {
        mobileNav();
    });


    // Window Resize Mobile Menu Fix
    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function() {
            if (width < 992) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }

    function getUrlParameter(param) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == param) {
                return sParameterName[1];

            }
        }
    }


    var parametro = getUrlParameter('ie');


    $('#btn-contratar').click(function() {


        if (getUrlParameter("ie") == 2) {

            window.location.href = "https://www.rededeentregas.com.br/index.html?ie=1";
        } else {
            $("#resultFreteModalCenter").modal("hide");
            setTimeout(function() {
                $("#btn-criar-conta").trigger("click")

            }, 200);
        }
    })



    if (parametro == 1) {
        $('#btn-criar-conta').trigger('click');
        $('footer').remove();
        $('header').remove();

        $('#contatos').click(function() {

        })




    } else if (parametro == 2) {

        $('#btn-cotacao').trigger('click');
        $('footer').remove();
        $('header').remove();
        $('.cover').addClass('d-none');

    } else if (parametro == 3) {

        $('#btn-criar-conta').trigger('click');
        $('footer').remove();
        $('header').remove();

    }

    $('#btn-cotacao').click(function() {
        $('.page').addClass('d-none');

    })



    // Navbar Scroll Set White Background Function
    function scrollNavBar() {
        var width = $(window).width();
        if (width > 991) {
            var scroll = $(window).scrollTop();
            if (scroll >= 30) {
                $(".header-area").addClass("header-sticky");
            } else {
                $(".header-area").removeClass("header-sticky");
            }
        }
    }


    //FUNCAO CONTATO menu
    $('#btn-contato, #btn-cotacao').click(function() {

        $(".header-area").addClass("header-sticky");


    })

    // Mascara cadastro
    // $(document).ready(function () {
    // 	var cpf= $("#cpf");
    // 	cpf.mask('000.000.000-00', {reverse: true});

    // 	var cnpj= $("#input-cnpj");
    // 	cnpj.mask('00.000.000/0000-00', {reverse: true});

    // 	var dataNascimento = $("#input-nascimento");
    // 	dataNascimento.mask('00/00/0000', {reverse: true});
    // 	});

    $(document).ready(function() {
        $("#input-cpf").mask("999.999.999-99");
        $("#input-cnpj").mask('00.000.000/0000-00');
        $("#input-nascimento").mask('00/00/0000');
        $("#input-cep").mask('00000-0000');
        $("#input-telefone").mask("(00) 0000-0000");
        $("#input-celular").mask("(00) 00000-0000");





    });



    $('.autoplay').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                    centerPadding: '10px',
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {


                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('#btn-menu-login').click(function() {
        $('header').hide();
        $('footer').hide();
        $('body').css('background-color', 'white');
        $('body').css('overflow', 'hidden');
    });

    $('#btn-menu-login-mobile').click(function() {
        $('header').hide();
        $('footer').hide();
        $('body').css('background-color', 'white');
    });

    $(".icon-pnl").mouseenter(function() {
        $(".icon-pnl-cliente").css("background-color", "red")
    });



})(window.jQuery);