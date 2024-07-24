function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
        $(".badge").removeClass("d-none")
        $(".badge").focus()
        campo.value = "";
    } else {
        $(".badge").addClass("d-none")
    }
}

function pullInput() {
    $('#form-simula-frete').on('keydown', 'input, .tab-enter', function (e) {
        var self = $(this),
            form = self.parents('form:eq(0)'),
            focusable, next;
        if (e.keyCode == 13) {
            e.preventDefault();
            focusable = form.find('.tab-enter').filter(':visible:not([readonly]):not([disabled])');
            next = focusable.eq(focusable.index(this) + 1);
            if (next.length) {
                next.focus();
            } else {
                //submeteCotacao();
                //$("#btn-calcula-frete").trigger("click")
                return false;
            }
        }
    });
}

function limpa_formulário_cep() {
    document.getElementById(inputSelect).value = ('');
    document.getElementById(inputSelCEP).value = ('');
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {

        var contaCtn = (conteudo.logradouro + ", " + conteudo.bairro + ", " + conteudo.localidade + " - " + conteudo.uf).length;
        //console.log(contaCtn);

        //hideLoading()

        document.getElementById(inputSelect).value = (conteudo.logradouro + ", " + conteudo.bairro + ", " + conteudo.localidade + " - " + conteudo.uf);

        if (contaCtn <= 86) {
            document.getElementById(inputSelect).style.fontSize = "1rem";
        } else {
            document.getElementById(inputSelect).style.fontSize = "1rem";
        }

    } else {
        //hideLoading()
        limpa_formulário_cep();

        document.getElementById(inputSelect).style.fontSize = "1rem";

        document.getElementById(inputSelect).value = 'CEP não localizado!'

        document.getElementById(inputSelCEP).focus();


    };
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

            document.getElementById(idInputCEP).value = cep.substring(0, 5) +
                "-" +
                cep.substring(5);

            document.getElementById(idInputEndereco).value = "...";

            //showLoading()

            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            //hideLoading()
            limpa_formulário_cep();

            document.getElementById(inputSelect).style.fontSize = "1em";

            document.getElementById(inputSelect).value = 'Formato do CEP está inválido!'


            document.getElementById(inputSelCEP).focus();


        }
    } else {
        limpa_formulário_cep();
    }
};


//Funções relacionadas à adição e remoção de volumes
function resetIndexes() {
    var j = 1;
    $('.count-vol').each(function () {
        if (j > 1) {
            $(this).attr('name', 'count-vol-' + j);
            $(this).html('Volume ' + j);
            $(this).attr('id', 'id-count-vol-' + j);
            $(this).parents('.volumes').attr('id', 'volume-' + j);
        }
        j++;
    });
}

var i = 2

function adicionaVolume() {
    if (i > 3) {
        $(".msg-erro").removeClass("d-none").css("margin-top", "-90px");
        return
    }

    //for (i = 2; i < 5; i++) {
    $("#ctn-volume").append(`<div id="volume-${i}" class="row p-4 mt-4 text-white">
    <div class="col-md-12 pl-4">
        <p style="font-size: 1.45em;" name="count-vol-${i}" id="id-count-vol-${i}"
            class="h4 col-md-2 text-center count-vol">Volume ${i}</p>
    </div>
    <div class="col-md-3 col-sm-12 p-4"> <input id="frete-quantidade${i}" type="number"
            class="tab-enter form-control frete-quantidade" placeholder="QUANTIDADE" min="1"> </div>
    <div class="col-md-3 col-sm-12 p-4"> <input id="frete-altura${i}" type="text"
            class="tab-enter form-control frete-altura" placeholder="ALTURA" min="1"> </div>
    <div class="col-md-3 col-sm-12 p-4"> <input id="frete-largura${i}" type="text"
            class="tab-enter form-control frete-largura" placeholder="LARGURA" min="1"> </div>
    <div class="col-md-3 p-4 text-center d-flex align-items-center"> <button tabindex="-1" onclick="removeVolume(this)"
            type="button" style="font-size: 0.65em !important" class="remover-volume" id="remover-volume-${i}">Remover
            este volume</button> </div>
    <div class="col-md-4 col-sm-12 p-4"> <input id="frete-comprimento${i}" type="text"
            class="tab-enter form-control frete-comprimento" placeholder="COMPRIMENTO" min="1"> </div>
    <div class="col-md-4 col-sm-12 p-4"> <input id="frete-peso${i}" type="text"
            class="tab-enter form-control frete-peso" placeholder="PESO" min="1"> </div>
    <div class="col-md-4 col-sm-12 p-4"> <input id="frete-valor${i}" type="text"
            class="tab-enter form-control frete-valor" placeholder="VALOR DA CARGA"> </div>
</div>`);

    var elmnt = document.getElementById('volume-' + i);
    elmnt.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'start'
    });
    i++;
};

function removeVolume() {
    $('#ctn-volume').on('click', '.remover-volume', function () {
        if (i > 2) {
            $(this).parents('#ctn-volume div').remove();
            resetIndexes();
            i--;
            fechaMsgErro()
        }
        $('html, body').animate({
            scrollTop: $('.volumes').closest('div').offset().top - 100
        }, 1000);
        return false;
    });
}

function fechaMsgErro() {
    $(".msg-erro").addClass("d-none");
}

// FIM --> Funções relacionadas à adição e remoção de volumes

function getMoney(str) {
    return parseInt(str.replace(/[\D]+/g, ''));
}

function formatReal(int) {
    var tmp = int + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
}

function submeteCotacao() {
    var cepOrigem = $("#cep-origem").val();
    var cepDestino = $("#cep-destino").val();

    var dados = {
        "codigo": "16669",
        "local": "BR",
        "peso_cubado": 0,
        "cep_origem": cepOrigem,
        "cep": cepDestino,
        "metragem_cubica": getCubagem().toLocaleString(),
        "peso": getPeso().toLocaleString(),
        "valor": getValorMerc().toLocaleString()
    };

    // $("#overlay").empty().append(Overlay);

    //showLoading()

    $.ajax({
        url: "https://englobasistemas.com.br/financeiro/api/fretes/calcularFrete",
        data: dados,
        type: "POST",
        success: function (data) {

            //hideLoading()

            if (data.atende == "Não") {

                $("#btn-alerta-form").trigger("click");
                $("#aviso-form-1").text("Localidade não é atendida.");
                $("#aviso-form-2").text("Não encontramos transportadoras que atendam a região de destino!");
                $("#aviso-form-3").text("");

            } else {

                $("#btn-modal-frete").trigger("click");
                $(".frete-base").html(data.sigla_base_destino);
                $(".frete-peso").html(data.peso_taxado);
                $(".frete-total").html("R$ " + data.frete);

                var Mod1 = getMoney(data.frete) + 2225;
                var Mod2 = getMoney(data.frete) + 3250;
                var Mod3 = getMoney(data.frete) + 1275;
                var Mod4 = getMoney(data.frete) + 932;

                $(".frete-total-mod-1").html("R$ " + formatReal(Mod1));
                $(".frete-total-mod-2").html("R$ " + formatReal(Mod2));
                $(".frete-total-mod-3").html("R$ " + formatReal(Mod3));
                $(".frete-total-mod-4").html("R$ " + formatReal(Mod4));

                if (data.prazo > 2) {

                    $(".frete-prazo").html("de " + data.prazo + " a " + (data.prazo + 1) + " dias úteis");
                    $(".frete-prazo-mod-1").html("de " + (data.prazo - 1) + " a " + (data.prazo) + " dias úteis");
                    $(".frete-prazo-mod-2").html("de " + (data.prazo) + " a " + (data.prazo + 1) + " dias úteis");
                    $(".frete-prazo-mod-3").html("de " + (data.prazo - 2) + " a " + (data.prazo - 1) + " dias úteis");
                    $(".frete-prazo-mod-4").html("de " + (data.prazo - 3) + " a " + (data.prazo - 2) + " dias úteis");

                } else {

                    $(".frete-prazo").html("de " + data.prazo + " a " + (data.prazo + 1) + " dias úteis");
                    $(".frete-prazo-mod-1").html("de " + (data.prazo) + " a " + (data.prazo + 1) + " dias úteis");
                    $(".frete-prazo-mod-2").html("de " + (data.prazo) + " a " + (data.prazo + 1) + " dias úteis");
                    $(".frete-prazo-mod-3").html("de " + (data.prazo) + " a " + (data.prazo + 1) + " dias úteis");
                    $(".frete-prazo-mod-4").html("de " + (data.prazo) + " a " + (data.prazo + 1) + " dias úteis");
                }

            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            var data = xhr.responseJSON.Message;
            //hideLoading();
            $("#btn-alerta-form").trigger("click");
            $("#aviso-form-1").text("Ocorreu algum erro na solicitação!").addClass("alert alert-light");
            $("#aviso-form-2").text(data).addClass("alert alert-danger p-2 m-2");
            $("#aviso-form-3").text("Obs.: É necessário preencher todos os campos!").addClass("alert alert-info p-2 m-2");
        }
    });
}

function getCubagem() {
    var soma = 0;
    for (var i = 0; i < $("#ctn-volume")[0].children.length; i++) {
        var valueAltura = $("#" + $("#ctn-volume")[0].children[i].id + " .frete-altura")[0].value;
        var valueLargura = $("#" + $("#ctn-volume")[0].children[i].id + " .frete-largura")[0].value;
        var valueComprimento = $("#" + $("#ctn-volume")[0].children[i].id + " .frete-comprimento")[0].value;
        var valueQtde = $("#" + $("#ctn-volume")[0].children[i].id + " .frete-quantidade")[0].value;
        soma += (parseInt(valueAltura) / 100) * (parseInt(valueLargura) / 100) * (parseInt(valueComprimento) / 100) * (valueQtde);
    }
    if (isNaN(soma)) {
        $("#btn-alerta-form").trigger("click");
        $("#aviso-form-1").text("Ocorreu algum erro na solicitação");
        $("#aviso-form-2").text("Obs.: É necessário preencher todos os campos!");
        $("#aviso-form-3").text("Existe(m) volume(s) com os campos vazios!");
    } else {
        //console.log("Get Cubagem: " + soma);
        return soma;
    }
}

function getPeso() {
    var soma = 0;
    for (var i = 0; i < $("#ctn-volume")[0].children.length; i++) {
        var valuePeso = $("#" + $("#ctn-volume")[0].children[i].id + " .frete-peso")[0].value.replace(',', '.');
        var valueQtde = $("#" + $("#ctn-volume")[0].children[i].id + " .frete-quantidade")[0].value;
        soma += parseFloat(valuePeso) * (valueQtde);
    }
    //console.log("Peso: " + soma);
    return soma;
}

function getValorMerc() {
    var soma = 0;
    for (var i = 0; i < $("#ctn-volume")[0].children.length; i++) {
        var valueValorMerc = $("#" + $("#ctn-volume")[0].children[i].id + " .frete-valor")[0].value.replace(',', '.');
        var valueQtde = $("#" + $("#ctn-volume")[0].children[i].id + " .frete-quantidade")[0].value;
        soma += parseFloat(valueValorMerc) * (valueQtde);
    }
    //console.log("Valor: " + soma);
    return soma;

}