$(function () {
    $('[type=money]').maskMoney({
        thousands: '.',
        decimal: ',',
        prefix: 'R$ ',
        allowNegative: false
    });
})

function pesoEmbalagem(num) {
    num.value = num.value.substring(0, 6);
    var er = /[^0-9,]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
        campo.value = "";
    }
    // var pesoVal = campo.value.replace(',', '.');
    // if (pesoVal >= 999.001 || pesoVal >= 999000 || pesoVal < 0) {
    //     $("#btn-alerta-form").trigger("click");
    //     $("#aviso-form-1").text("Peso inválido!");
    //     $("#aviso-form-2").text("Máximo permitido: 999kg");
    //     campo.value = "1";
    // }
}
function getCubagem() {
    var soma = 0;
    for (var i = 0; i < $(".volumes")[0].children.length; i++) {
        var valueAltura = $("#" + $(".volumes")[0].children[i].id + " .input-altura")[0].value;
        var valueLargura = $("#" + $(".volumes")[0].children[i].id + " .input-largura")[0].value;
        var valueComprimento = $("#" + $(".volumes")[0].children[i].id + " .input-comprimento")[0].value;
        //var valueQtde = $("#" + $(".volumes")[0].children[i].id + " .input-quantidade")[0].value;
        soma += (parseInt(valueAltura) / 100) * (parseInt(valueLargura) / 100) * (parseInt(valueComprimento) / 100) * (1);
    }
    if (isNaN(soma)) {
        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Ocorreu algum erro na solicitação");
        $("#aviso-form-2").text("Obs.: É necessário preencher todos os campos!");
        $("#aviso-form-3").text("Existe(m) volume(s) com os campos vazios!");
    }
    else {
        return soma;
    }
}
// $('#input-quantidade').blur(function () {
//     var qtde = this.value;
//     if (qtde == 0 || qtde == ' ') {
//         $(this).val('1');
//     }
// });
$('#input-peso-emb').blur(function () {
    var qtde = this.value;
    if (qtde == 0 || qtde == ' ') {
        $(this).val('0');
    }
});
function getPeso() {
    var soma = 0;
    for (var i = 0; i < $(".volumes")[0].children.length; i++) {
        var valuePeso = $("#" + $(".volumes")[0].children[i].id + " .input-peso-emb")[0].value.replace(',', '.');
        //var valueQtde = $("#" + $(".volumes")[0].children[i].id + " .input-quantidade")[0].value;
        soma += parseFloat(valuePeso) * (1);
    }
    return soma;
}
function getValorMerc() {
    var soma = 0;
    for (var i = 0; i < $(".volumes")[0].children.length; i++) {
        var valueValorMerc = $("#" + $(".volumes")[0].children[i].id + " .input-valor-merc")[0].value.replace('R$', ' ');
        var valueValorMercFormat = valueValorMerc.replace(',', '.');
        //var valueQtde = $("#" + $(".volumes")[0].children[i].id + " .input-quantidade")[0].value;
        soma += parseFloat(valueValorMercFormat) * (1);
    }
    return soma;
}

function validaAltura() {
    var altura = $("#input-altura").val()
    if (altura <= 1 || altura > 100) {
        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Altura informada não é válida!");
        $("#aviso-form-2").html("<p>Altura mínima: 2cm</p><p>Altura máxima: 100cm</p>");
        $("#input-altura").focus();
        return false;
    }
    return true;
}

function validaLargura() {
    var largura = $("#input-largura").val()
    if (largura <= 10 || largura > 100) {
        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Largura informada não é válida!");
        $("#aviso-form-2").html("<p>Largura mínima: 11cm</p><p>Largura máxima: 100cm</p>");
        $("#input-largura").focus();
        return false;
    }
    return true;
}

function validaComprimento() {
    var comprimento = $("#input-comprimento").val()
    if (comprimento <= 15 || comprimento > 100) {
        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Comprimento informado não é válido!");
        $("#aviso-form-2").html("<p>Comprimento mínimo: 16cm</p><p>Comprimento máximo: 100cm</p>");
        $("#input-comprimento").focus();
        return false;
    }
    return true;
}

function validaValorMercadoria() {
    var valorMercadoria = $("#input-valor-merc").val()

    valorMercadoria = valorMercadoria.replace(",", "");
    valorMercadoria = valorMercadoria.replace(".", "");
    valorMercadoria = valorMercadoria.replace("R$", "");

    if (valorMercadoria >= 300001) {
        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Valor informado não é válido!");
        $("#aviso-form-2").html("<p>Valor máximo permitido:</p><p>R$ 3.000,00 (três mil reais)</p>");
        $("#input-valor-merc").focus();
        return false;
    }
    return true;
}


function submeteCotacao() {
    if ($("#input-cep-origem").val() == '') {

        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("CEP de origem informado não é válido!");
        $("#aviso-form-2").text("Favor informar um CEP válido.");

    } else if ($("#input-cep-destino").val() == 0) {

        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("CEP de destino informado não é válido!");
        $("#aviso-form-2").text("Favor informar um CEP válido.");

    } else if ($("#input-altura").val() == 0) {

        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Altura informada não é válida!");
        $("#aviso-form-2").text("Informe a altura da embalagem");

    } else if ($("#input-largura").val() == 0) {

        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Largura informada não é válida!");
        $("#aviso-form-2").text("Informe a largura da embalagem");

    } else if ($("#input-comprimento").val() == 0) {

        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Comprimento informado não é válido!");
        $("#aviso-form-2").text("Informe o comprimento da embalagem");

    } else if ($("#input-peso-emb").val() == 0) {

        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Peso informado não é válido!");
        $("#aviso-form-2").text("Informe o peso da embalagem");

    } else if ($("#input-valor-merc").val() == 0) {

        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Valor informado não é válido!");
        $("#aviso-form-2").text("Informe um valor da mercadoria maior que zero.");

    } else {

        return submeteCotacaoVal()

    }
}
function submeteCotacaoVal() {
    var cepOrigem = $("#input-cep-origem").val();
    var cepDestino = $("#input-cep-destino").val();
    //var codigoRegraCalculo = getUrlParameter('crc');
    // if (codigoRegraCalculo == '') {
    //     codigoRegraCalculo = '1492';
    // }
    var dados = {
        "codigo": "16669", //codigoRegraCalculo,
        "local": "BR",
        "peso_cubado": 0,
        "cep_origem": cepOrigem,
        "cep": cepDestino,
        "metragem_cubica": getCubagem().toLocaleString(),
        "peso": getPeso().toLocaleString(),
        "valor": getValorMerc().toLocaleString()
    };
    $("#overlay").empty().append(Overlay);
    jQuery.ajax({
        url: "https://www.englobasistemas.com.br/financeiro/api/fretes/calcularFrete",
        data: dados,
        type: "POST",
        success: function (data) {
            overlayHidde();
            if (data.atende == "Não") {
                $("#btn-alerta-form").trigger("click");
                $("#aviso-form-1").text("Localidade não é atendida.");
                $("#aviso-form-2").text("Não encontramos transportadoras que atendam a região de destino!");
                $("#aviso-form-3").text("");
            }
            else {

            //    var diaHorario = data.data_calculo.split('T')
            //     diaHorario = [diaHorario[0].split('-'), diaHorario[1].split(':') ]
            //    var dia = diaHorario[0].reverse().toString().replace(/,/g ,'/');

            //     $("#horarioLocal").html(dia + ' - ' + diaHorario[1][0] + ':' + diaHorario[1][1]);

                $("#btn-modal-frete").trigger("click");
                $(".frete-total").html(data.frete);
                $(".frete-prazo").html(data.prazo);
                $(".frete-base").html(data.sigla_base_destino);
                $(".frete-peso").html(data.peso_taxado);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            var data = xhr.responseJSON.Message;
            overlayHidde();
            $("#btn-alerta-form").trigger("click");
            $("#aviso-form-2").text(data).addClass("alert alert-light p-2 m-2 text-center");
        }
    });
}
$('#form-simula-frete').on('keydown', 'input, .tab-enter', function (e) {
    var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
    if (e.keyCode == 13) {
        focusable = form.find('.tab-enter').filter(':visible:not([readonly]):not([disabled])');
        next = focusable.eq(focusable.index(this) + 1);
        if (next.length) {
            next.focus();
            next.select();
        }
        else {
            submeteCotacao();
        }
        return false;
    }
});
function getUrlParameter(admin) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == admin) {
            return sParameterName[1];
        }
    }
}
var parametro = getUrlParameter('ie');
if (parametro == 2) {
    $('#btn-cotacao').trigger('click');
    $('footer').remove();
    $('header').remove();
    $('.cover').addClass('d-none');
    $("div").find("#input-cep-origem").focus();
    $('.cover').addClass('d-none');
    $('ol').remove();
}
$("div").find("#input-cep-origem").focus();
$("#input-cep-origem").mask('99999-999');
$("#input-cep-destino").mask('99999-999');
function limpa_formulário_cep() {
    document.getElementById(inputSelect).value = ('');
    document.getElementById(inputSelCEP).value = ('');
    var Ceps = document.getElementById(inputSelCEP);
    $(Ceps).removeClass('input-cep-origem-correto');
    if (Ceps.id == 'input-cep-origem') {
        $('#input-endereco-origem').text(' ');
    }
    else {
        $('#input-endereco-destino').text(' ');
    }
}
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        var width = $(window).width();
        if (width <= 400) {
            var endereco = document.getElementById(inputSelect);
            $(endereco).text(conteudo.localidade + " - " + conteudo.uf);
        }
        else {
            var endereco = document.getElementById(inputSelect);
            $(endereco).text(conteudo.logradouro + ", " + conteudo.bairro + ", " + conteudo.localidade + " - " + conteudo.uf);
        }
    }
    else {
        limpa_formulário_cep();
        $(".input-altura").val("10");
        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("CEP não localizado!");
        $("#aviso-form-2").text("Verifique se o CEP digitado está correto.");
        setTimeout(function () {
            $('#input-cep-origem').focus();
        }, 1800);
        setTimeout(function () {
            $(".input-altura").val("");
        }, 500);
    }
    ;
    overlayHidde();
}
var inputSelect = "";
var inputSelCEP = "";
function pesquisacep(valor, idInputCEP, idInputEndereco) {
    inputSelect = idInputEndereco;
    inputSelCEP = idInputCEP;
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            document.getElementById(idInputCEP).value = cep.substring(0, 5)
                + "-"
                + cep.substring(5);
            $("#overlay").empty().append(Overlay);
            document.getElementById(idInputEndereco).value = "...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
            var InputCEP = document.getElementById(idInputCEP);
            $(InputCEP).addClass('input-cep-origem-correto');
        }
        else {
            limpa_formulário_cep();
            $("#btn-alerta-form").trigger("click");
            $(".input-altura").val("10");
            $("#aviso-form-1").text("Formato do CEP está inválido!");
            $("#aviso-form-2").text("Digite apenas os números do CEP.");
            setTimeout(function () {
                $('#input-cep-origem').focus();
            }, 2700);
            setTimeout(function () {
                $(".input-altura").val("");
            }, 500);
        }
    }
    else {
        limpa_formulário_cep();
    }
}

function medidasEmbalagem(num) {
    if (num.value == '') {
        num.value = '0';
    }
    num.value = num.value.substring(0, 3);
    var er = /[^0-9]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
        campo.value = "";
    }

    // if (campo.value >= 150.01 || campo.value < 0) {
    //     $("#btn-alerta-form").trigger("click");
    //     $("#aviso-form-1").text("O tamanho informado não é permitido!");
    //     $("#aviso-form-2").text("Mínimo: 5cm | Máximo: 150cm");
    //     $("#aviso-form-3").text("Este campo não pode ficar vazio!");
    //     campo.value = "5";
    // }
}

//Volume principal
// $("#input-valor-merc").blur(function () {
//     var valor = this.value;
//     if (valor != ' ') {
//         $("#input-valor-merc").click(function () {
//             $("#input-valor-merc").val(valor);
//         });
//         var valorInt = parseInt(valor);
//         var valorreais = valorInt.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
//         //var valorreais = valorInt.toLocaleString();
//         if (valorreais != 'R$ NaN') {
//             $('#input-valor-merc').val(valorreais);
//         }
//         else {
//             $('#input-valor-merc').val(valor);
//         }
//     }
// });

$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.keyCode == 13) {
            $('.close').trigger('click');
        }
    });
});
function resetIndexes() {
    var j = 1;
    $('.count-vol').each(function () {
        if (j > 1) {
            $(this).attr('name', 'count-vol-' + j);
            $(this).html('Volume ' + j);
            $(this).attr('id', 'id-count-vol-' + j);
            $(this).parents('.volume-insert').attr('id', 'volume-' + j);
        }
        j++;
    });
}
$(function () {
    var scntDiv = $('#ctn-volumes');
    var i;
    $('#btn-add-volume').on('click', function () {
        i = $('#ctn-volumes .itens-volume').size() + 2;
        $("\n      \n      \n      <div id=\"volume-" + i + "\" class=\"container volume-insert mt-4\">\n      <div class=\"col-lg-0 col-md-12 col-sm-12 row\">\n      \n          <h5 name=\"count-vol-" + i + "\" class=\"count-vol\" id=\"id-count-vol-" + i + "\">Volume&nbsp;<span id=\"id-volume\">" + i + "</span></h5>\n      </div>\n      <hr class=\"justify-content-between\">\n      <!-- Itens do Volume -->\n      <div class=\"itens-volume border-bottom mb-2row justify-content-between\" id=\"itens-volume-" + i + "\">\n          <div class=\"medidas row justify-content-around\">\n\n            <div class=\"col-lg-4 col-md-12 col-sm-12\">\n  \n                  <label class=\"small\" for=\"input-altura\">Altura (cm)</label>\n                  <a readonly tabindex=\"-1\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalExemplo-altura\" class=\"read-more no-index\"> <i class=\"fa fa-question-circle\"></i></a>\n                  <input class=\"tab-enter input-altura\" id=\"input-altura\" name=\"input-altura\" maxlength=\"3\" inputmode=\"numeric\" onblur=\"medidasEmbalagem(this)\" value=\"0\">\n  \n              </div>\n  \n              <div class=\"col-lg-4 col-md-12 col-sm-12\">\n  \n                  <label class=\"small\" for=\"input-largura\">Largura (cm)</label>\n                  <a readonly tabindex=\"-1\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalExemplo-largura\" class=\"read-more no-index\"> <i class=\"fa fa-question-circle\"></i></a>\n                  <input class=\"tab-enter input-largura\" id=\"input-largura\" name=\"input-largura\" maxlength=\"3\" inputmode=\"numeric\" onblur=\"medidasEmbalagem(this)\" value=\"0\">\n  \n              </div>\n  \n              <div class=\"col-lg-4 col-md-12 col-sm-12\">\n  \n                  <label class=\"small\" for=\"input-comprimento\">Comprimento (cm)</label>\n                  <a readonly tabindex=\"-1\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalExemplo-comp\" class=\"read-more no-index\"> <i class=\"fa fa-question-circle\"></i></a>\n                  <input class=\"tab-enter input-comprimento\" id=\"input-comprimento\" name=\"input-comprimento\" maxlength=\"3\" inputmode=\"numeric\" onblur=\"medidasEmbalagem(this)\" value=\"0\">\n  \n              </div>\n          </div>\n  \n  \n          <div class=\"row justify-content-start\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12\">\n  \n                  <label for=\"input-peso-emb\">Peso com embalagem (kg)</label>\n                  <input class=\"tab-enter input-peso-emb\" id=\"input-peso-emb-" + i + "\" maxlength=\"6\" inputmode=\"decimal\" name=\"input-peso-emb\" onblur=\"pesoEmbalagem(this)\" value=\"0\">\n                  <span class=\"kg\">Kg</span>\n              </div>\n  \n            \n                                    <div class=\"col-lg-4 col-md-12 col-sm-12\">\n\n                                        <label for=\"input-valor-merc-" + i + "\">Valor da mercadoria (R$)</label>\n                                        <input class=\"tab-enter input-valor-merc input-dinheiro\" type=\"money\" id=\"input-valor-merc-" + i + "\" inputmode=\"decimal\" placeholder=\"R$ 0,00\" value=\"0\"  name=\"input-valor-merc\">\n    \n                                    </div>\n  \n              <div class=\"col-lg-4 col-md-12 col-sm-12\">\n              <label class=\"small mt-2\">Clique para remover este volume</label>\n              <a class=\"btn-del-volume btn-remove btn-primary-line bg-danger text-white border-white\" href=\"#\">Remover</a>\n          </div>\n  \n          </div>\n          <!-- Itens Volume End -->\n      </div>\n  </div>  \n      \n      ").appendTo(scntDiv);

        // $('#input-quantidade-' + i).blur(function () {
        //     var qtde = this.value;
        //     if (qtde == 0 || qtde == ' ') {
        //         $(this).val('1');
        //     }
        // });
        $('#input-peso-emb-' + i).blur(function () {
            var qtde = this.value;
            if (qtde == 0 || qtde == ' ') {
                $(this).val('0');
            }
        });

        $(function () {
            $('[type=money]').maskMoney({
                thousands: '.',
                decimal: ',',
                prefix: 'R$ ',
                allowNegative: false
            });
        })

        //Volumes adicionados
        // $("#input-valor-merc-" + i).blur(function () {
        //     var valor = this.value;
        //     if (valor != ' ') {
        //         $(this).click(function () {
        //             $(this).val(valor);
        //         });
        //         var valorInt = parseInt(valor);
        //         var valorreais = valorInt.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        //         if (valorreais != 'R$ NaN') {
        //             $(this).val(valorreais);
        //             console.log(valorreais)
        //         }
        //         else {
        //             $(this).val(valor);
        //             console.log(valor)
        //         }
        //     }
        // });

        $('html, body').animate({
            scrollTop: $("#itens-volume-" + i).offset().top - 140
        }, 1000);
        i++;
        return false;
    });
    $('#ctn-volumes').on('click', '.btn-del-volume', function () {
        if (i > 2) {
            $(this).parents('#ctn-volumes div').remove();
            resetIndexes();
        }
        $('html, body').animate({
            scrollTop: $('.volume-insert').closest('div').offset().top - 100
        }, 1000);
        return false;
    });
    $(".parallax-mirror").hide();
});
