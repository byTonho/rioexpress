$(document).ready(function () {
    $('#esconder-senha').hide();
});
$("#mostrar-senha").mousedown(function () {
    $("#senha-login").attr("type", "text");
    $('#esconder-senha').show();
    $('#mostrar-senha').hide();
});
$("#esconder-senha").mousedown(function () {
    $("#senha-login").attr("type", "password");
    $('#mostrar-senha').show();
    $('#esconder-senha').hide();
});
$(function () {
    $("#dba").on("click", function () {
        $("#nop,#nop1,#nop2").attr("fill", "#E15554");
        $("#carro").attr("stop-opacity", "0.10");
        $(this).prev().animate({ "opacity": "0.50" });
    });
});
$(function () {
    $("#ender").on("click", function () {
        $("#nop,#nop1,#nop2").attr("fill", "linear-gradient(135deg, #2d4f76 50%, #70a05f 100%);");
        $("#nop,#nop1,#nop2").css({ 'opacity': 0.10 });
    });
});
function mudar() {
    var tente = $('#user-login').val();
    console.log(tente);
    if (tente == 'ender') {
        $("#nop,#nop1,#nop2").attr("fill", "#f7931d");
        $("#nop,#nop1,#nop2").css({ 'opacity': 0.5 });
        $("#logar-button").css({ background: "-webkit-gradient(linear, left top, left bottom, from(#f7931d), to(#f7ae1d))" });
        $("#logar-button").css({ 'border': '#f7931d' });
    }
    else if (tente == 'rpd') {
        $("#nop,#nop1,#nop2").attr("fill", "#8dd819");
        $("#nop,#nop1,#nop2").css({ 'opacity': 0.5 });
        $("#logar-button").css({ background: "-webkit-gradient(linear, left top, left bottom, from(#8dd819), to(#2a891e))" });
        $("#logar-button").css({ 'border': '#8dd819' });
    }
    else if (tente == 'dba') {
        $("#nop,#nop1,#nop2").attr("fill", "#E15554");
        $("#nop,#nop1,#nop2").css({ 'opacity': 0.5 });
        $("#logar-button").css({ background: "-webkit-gradient(linear, left top, left bottom, from(#E15554), to(#ed2121))" });
        $("#logar-button").css({ 'border': '#E15554' });
    }
}
$(function () {
    $("#rdp").on("click", function () {
        $("#nop,#nop1,#nop2").attr("fill", "#8dd819");
        $("#carro").attr("stop-opacity", "0.10");
    });
});
$('#esqueci').click(function () {
    $("#esqueci-senha").css("display", "block");
    $("#formulario-login").css("display", "none");
});
