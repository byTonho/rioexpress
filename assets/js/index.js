$(window).load(function () {
    $("a").click(function (event) {
        if (event.currentTarget.dataset.router != undefined) {
            RenderAreas(event.currentTarget.dataset.router, event);
        }
    });
    var config = {
        reset: false,
    };
    window.sr = new scrollReveal();
    var query = window.location.search.substring(1);
    var contato = window.location.search.substring(1);
    if (query == "quem-somos") {
        setTimeout(function () {
            $("#linkAncora").trigger("click");
        }, 100);
    }
});
$("a").click(function () {
    var checkDiv = $(this).parent().parent();
    if (checkDiv.attr("id") != "sobre-out") {
        $("#sobre-out").removeClass("d-none");
        $("#sobre-in").addClass("d-none");
    }
});
$("#sobre-out a").click(function () {
    $("#sobre-out").addClass("d-none");
    $("#sobre-in").removeClass("d-none");
});
$("#sobre-in a").click(function () {
    $("#sobre-out").addClass("d-none");
    $("#sobre-in").removeClass("d-none");
});
$(".btn-menu").click(function () {
    $(".menu-trigger").trigger("click");
});
$('#btn-rastreio').on('click', function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $(".modal-body-rastreio").html('<iframe id="iframe-modal-rastreio" src="' + url + '"></iframe>');
});
$('#btn-rastreio-rodape').on('click', function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $(".modal-body-rastreio").html('<iframe id="iframe-modal-rastreio" src="' + url + '"></iframe>');
});
var Overlay = "\n<div class=\"loader-wrapper\">\n<div class=\"loader\">\n    <div class=\"bubble-1\"></div>\n    <div class=\"bubble-2\"></div>\n    <div class=\"bubble-3\"></div>\n</div>\n</div>\n";
var d = new Date();
var versao = "ds" + d.getDay() + "dm" + d.getDate() + "m" + (d.getMonth() + 1) + "y" + d.getFullYear() + "-" + d.getHours() + "h" + d.getMinutes() + "min";
function RenderAreas(router, event) {
    var routerConcat = "";
    if (event != undefined) {
        if (event.currentTarget.dataset.href != undefined) {
        }
        else {
            $("#overlay").empty().append(Overlay);
        }
    }
    ;
    routerConcat = "areas/" + router + "?" + versao;
    $("#app-view").load(routerConcat, function () {
        var config = { reset: false };
        overlayHidde();
    });
}
$("a").click(function (event) {
    if (event.currentTarget.dataset.router != undefined) {
        RenderAreas(event.currentTarget.dataset.router, event);
    }
});
function overlayHidde() {
    $(".loader-wrapper").animate({
        'opacity': '0'
    }, 600, function () {
        setTimeout(function () {
            if ($('#download').length) {
                $('#download').parallax({
                    imageSrc: 'assets/images/parallax.jpg',
                    zIndex: '1'
                });
            }
            if ($('#subscribe').length) {
                $('#subscribe').parallax({
                    imageSrc: 'assets/images/photos/parallax-subscribe.jpg',
                    zIndex: '1'
                });
            }
            $(".loader-wrapper").css("visibility", "hidden").fadeOut();
        }, 300);
    });
}
$("#ajuda-link-1").click(function () {
    setTimeout(function () {
        $("#faqCollapse0").addClass("show alert-info");
    }, 500);
});
$("#ajuda-link-2").click(function () {
    setTimeout(function () {
        $("#faqCollapse1").addClass("show alert-info");
    }, 500);
});
$("#ajuda-link-3").click(function () {
    setTimeout(function () {
        $("#faqCollapse3").addClass("show alert-info");
    }, 500);
});
