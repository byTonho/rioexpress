$(document).ready(function () {
    $("#header").load("header.html")
    $("#content").load("content.html")
    $("#footer").load("footer.html")           
})

function Overlay() {
    $("#btn-pre-loader").trigger("click")
}

// function sobreRede(){
//     $("#content").load("sobre-a-rede.html")
//     $("html, body").animate({ scrollTop: 0 }, 500);
// }

function sobreRede() {
    if ($(window).width() < 992) {
        $(".navbar-toggler").trigger("click");
    }
    if ($("#sobre-a-rede").length > 0) {
        $('html, body').animate({ scrollTop: $("#sobre-a-rede").offset().top }, 500);
    } else {
        $("#content").load("content.html", function () {
            $('html, body').animate({ scrollTop: $("#sobre-a-rede").offset().top }, 500);
        });
    }
}

function servicosRede() {
    if ($(window).width() < 992) {
        $(".navbar-toggler").trigger("click");
    }
    if ($("#solucoes").length > 0) {
        $('html, body').animate({ scrollTop: $("#solucoes").offset().top }, 500);
    } else {
        $("#content").load("content.html", function () {
            $('html, body').animate({ scrollTop: $("#solucoes").offset().top }, 500);
        });
    }
}

function chamaContato() {
    if ($(window).width() < 992) {
        $(".navbar-toggler").trigger("click");
    }
    $("#content").load("contato.html", function () {
        $('html, body').animate({ scrollTop: $("#corpo-form-contato").offset().top }, 500);
    });
}

function criarConta() {
    if ($(window).width() < 992) {
        $(".navbar-toggler").trigger("click");
    }
    $("#content").load("criar-conta.html", function () {
        $('html, body').animate({ scrollTop: $("#page").offset().top }, 500);
    });
}

function cotacaoFreteSection() {
    if ($(window).width() < 992) {
        $(".navbar-toggler").trigger("click");
    }
    if ($("#sobre-frete").length > 0) {
        $('html, body').animate({ scrollTop: $("#sobre-frete").offset().top }, 500);        
    } else {
        $("#content").load("content.html", function () {
            $('html, body').animate({ scrollTop: $("#sobre-frete").offset().top }, 500);            
        });
    }
}

$(window).scroll(function () {
    if (window.scrollY > 0) {
        $(".fixed-top").css("background-color", "#0079bf").css("box-shadow", "0 0 10px rgba(0,0,0,0.3)");
        $(".navbar .btn-sucesso").addClass("d-md-block");
    } else {
        $(".fixed-top").css("background-color", "transparent").css("box-shadow", "none");
        $(".navbar .btn-sucesso").removeClass("d-md-block");
    }
});

//Botão SIMULAR FRETE do Menu
function btnMenuSimulaFrete() {

    // if ($(window).width() < 992) {
    //     $(".navbar-toggler").trigger("click");
    // }
    $("#content").load("simula-frete.html", function () {
        $('html, body').animate({ scrollTop: $("#calcula-frete").offset().top }, 500);
    });
}

