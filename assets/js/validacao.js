function chekFormEmail() {
    var email = document.getElementById("input-email").value;
    if (email != '' && validarEmail(email)) {
        $(document).ready(function () {
            $('#campo-cnpj, #fisica-cnpj').show();
            $('div').find('#input-cnpj').focus();
            $('#campo-cpf, #data-nascimento, #campo-nome, #campo-numero, #campo-endereco, ' +
                '#campo-complemento, #campo-bairro, #campo-cidade, #campo-cep, #campo-telefone, ' +
                '#campo-celular, #campo-inscricao-estadual, #campo-inscricao-municipal, #campo-email').hide();
            $('#btn-proximo-cadastro').show();
            $('#btn-proximo-cadastro-2').hide();
            $('#btn-proximo-cadastro-3').hide();
            $('#btn-proximo-Email').hide();
        });
    }
    else {
        $('#alerta-modal-cadastro').modal('show');
        $('#alerta-modal-cadastro').on('hidden.bs.modal', function () {
            $('#input-email').focus();
        });
    }
}
function checkForm() {
    var cpf = document.getElementById("input-cpf").value;
    var cnpj = document.getElementById("input-cnpj").value;
    var data_nascimento = document.getElementById("input-nascimento").value;
}
function checkFormParte2() {
    var nome = document.getElementById("input-nome").value;
    var cep = document.getElementById("input-cep").value;
    var rua = document.getElementById("input-rua").value;
    var numero = document.getElementById("input-numero").value;
    var cidade = document.getElementById("input-cidade").value;
    var bairro = document.getElementById("input-bairro").value;
    var estado = document.getElementById("input-estado").value;
    var estadual = document.getElementById("input-inscricao-estadual").value;
    var municipal = document.getElementById("input-inscricao-municipal").value;
}
function limparMensagem() {
    var nome = document.getElementById("input-nome").value;
    var cep = document.getElementById("input-cep").value;
    var rua = document.getElementById("input-rua").value;
    var complemento = document.getElementById("input-complemento").value;
    var numero = document.getElementById("input-numero").value;
    var cidade = document.getElementById("input-cidade").value;
    var bairro = document.getElementById("input-bairro").value;
    var estado = document.getElementById("input-estado").value;
    var estadual = document.getElementById("input-inscricao-estadual").value;
    var municipal = document.getElementById("input-inscricao-municipal").value;
    if (nome != '') {
        document.getElementById("msgnome").innerHTML = "";
    }
    if (rua != '') {
        document.getElementById("msgrua").innerHTML = "";
    }
    if (complemento != '') {
        document.getElementById("msgcomplemento").innerHTML = "";
    }
    if (numero != '') {
        document.getElementById("msgnumero").innerHTML = "";
    }
    if (cidade != '') {
        document.getElementById("msgcidade").innerHTML = "";
    }
    if (bairro != '') {
        document.getElementById("msgbairro").innerHTML = "";
    }
    if (estado != '') {
        document.getElementById("msgestado").innerHTML = "";
    }
    if (estadual != '') {
        document.getElementById("msgestadual").innerHTML = "";
    }
    if (municipal != '') {
        document.getElementById("msgmunicipal").innerHTML = "";
    }
}
function checkFormParte3() {
    var email = document.getElementById("input-email").value;
}
function validarCPF() {
    var cpf = $('#input-cpf').val().replace(/[^0-9]/g, '').toString();
    var cpf_verificacao = document.getElementById("input-cpf").value;
    if (cpf_verificacao != '') {
        if (cpf.length == 11) {
            var v = [];
            v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
            v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
            v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;
            v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
            v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
            v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;
            if ((v[0] != cpf[9]) || (v[1] != cpf[10]) || cpf.length != 11 || cpf == "00000000000" ||
                cpf == "11111111111" ||
                cpf == "22222222222" ||
                cpf == "33333333333" ||
                cpf == "44444444444" ||
                cpf == "55555555555" ||
                cpf == "66666666666" ||
                cpf == "77777777777" ||
                cpf == "88888888888" ||
                cpf == "99999999999") {
                document.getElementById("msgcpf").innerHTML = "CPF Inválido";
            }
            else {
                document.getElementById("msgcpf").innerHTML = "";
                return true;
            }
        }
        else {
            document.getElementById("msgcpf").innerHTML = "CPF Inválido";
        }
    }
    else {
        document.getElementById("msgcpf").innerHTML = "";
    }
}
function ValidaData(data) {
    var nascimento = document.getElementById("input-nascimento").value;
    if (nascimento != '') {
        var reg = /[^\d\/\.]/gi;
        var valida = data.replace(reg, '');
        if (valida && valida.length == 10) {
            var ano = data.substr(6), mes = data.substr(3, 2), dia = data.substr(0, 2), M30 = ['04', '06', '09', '11'], v_mes = /(0[1-9])|(1[0-2])/.test(mes), v_ano = /^(19[2-8][0-9]|199[0-9]|200[0-5])$/.test(ano), rexpr = new RegExp(mes), fev29 = ano % 4 ? 28 : 29;
            if (v_mes && v_ano) {
                document.getElementById("msgdata").innerHTML = "";
                if (mes == '02')
                    return (dia >= 1 && dia <= fev29);
                else if (rexpr.test(M30))
                    return /((0[1-9])|([1-2]\d)|30)/.test(dia);
                else
                    return /((0[1-9])|([1-2]\d)|3[0-1])/.test(dia);
            }
        }
        document.getElementById("msgdata").innerHTML = "Data de nascimento inválida";
        return false;
    }
    document.getElementById("msgdata").innerHTML = "";
}
function FormataCnpj(campo, teclapres) {
    var tecla = teclapres.keyCode;
    var vr = new String(campo.value);
    vr = vr.replace(".", "");
    vr = vr.replace("/", "");
    vr = vr.replace("-", "");
    var tam = vr.length + 1;
    if (tecla != 14) {
        if (tam == 3)
            campo.value = vr.substr(0, 2) + '.';
        if (tam == 6)
            campo.value = vr.substr(0, 2) + '.' + vr.substr(2, 5) + '.';
        if (tam == 10)
            campo.value = vr.substr(0, 2) + '.' + vr.substr(2, 3) + '.' + vr.substr(6, 3) + '/';
        if (tam == 15)
            campo.value = vr.substr(0, 2) + '.' + vr.substr(2, 3) + '.' + vr.substr(6, 3) + '/' + vr.substr(9, 4) + '-' + vr.substr(13, 2);
    }
}
function validarCNPJ(cnpj) {
    var cnpj_verificacao = document.getElementById("input-cnpj").value;
    if (cnpj_verificacao != '') {
        cnpj = cnpj.replace(/[^\d]+/g, '');
        if (cnpj == '')
            return false;
        document.getElementById("msgcnpj").innerHTML = "CNPJ inválido";
        if (cnpj.length != 14)
            return false;
        document.getElementById("msgcnpj").innerHTML = "CNPJ inválido";
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;
        document.getElementById("msgcnpj").innerHTML = "CNPJ inválido";
        var tamanho = cnpj.length - 2;
        var numeros = cnpj.substring(0, tamanho);
        var digitos = cnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        document.getElementById("msgcnpj").innerHTML = "CNPJ inválido";
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        document.getElementById("msgcnpj").innerHTML = "CNPJ inválido";
        document.getElementById("msgcnpj").innerHTML = "";
        var dados = {
            "cnpj": $("#input-cnpj").val()
        };
        jQuery.ajax({
            url: "https://englobasistemas.com.br/api/Util/PesquisarCNPJ",
            data: dados,
            type: "POST",
            success: function (data) {
                overlayHidde();
                $("#input-nome").val(data.result.nome);
                $("#input-cep").val(data.result.cep);
                $("#input-rua").val(data.result.logradouro);
                $("#input-complemento").val(data.result.complemento);
                $("#input-bairro").val(data.result.bairro);
                $("#input-numero").val(data.result.numero);
                $("#input-email").val(data.result.email);
                $('#input-telefone').val(data.result.telefone);
                $('#input-estado').val(data.result.uf);
                $('#input-cidade').val(data.result.municipio);
            }
        });
        return true;
    }
    document.getElementById('msgcnpj').innerHTML = '';
}
function meu_callback_cadastro(conteudo) {
    if (conteudo.result != null) {
        document.getElementById('input-rua').value = (conteudo.logradouro);
        document.getElementById('input-bairro').value = (conteudo.bairro);
        document.getElementById('input-cidade').value = (conteudo.localidade);
        document.getElementById('input-estado').value = (conteudo.uf);
        document.getElementById("msgcep").innerHTML = "";
    }
    else {
        document.getElementById("msgcep").innerHTML = "CEP Inválido";
        $('#input-rua').val('');
        $('#input-cidade').val('');
        $('#input-bairro').val('');
        $('#input-estado').val('');
        $('#input-complemento').val('');
    }
    overlayHidde();
    document.getElementById("msgcep").innerHTML = "";
}
function validarCep(valor) {
    console.log('aqui no cep');
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacepCkeck = /^[0-9]{8}$/;
        if (validacepCkeck.test(cep)) {
            document.getElementById('input-cep').value = cep.substring(0, 5)
                + "-"
                + cep.substring(5);
            $("#overlay").empty().append(Overlay);
            jQuery.ajax({
                url: "https://englobasistemas.com.br/api/Util/PesquisarCEP?cep=" + cep,
                data: cep,
                type: "POST",
                success: function (data) {
                    overlayHidde();
                    meu_callback_cadastro(data);
                    $("#input-rua").val(data.result.logradouro);
                    $("#input-bairro").val(data.result.bairro);
                    $("#input-cidade").val(data.result.localidade);
                    $("#input-estado").val(data.result.uf);
                }, error: function () {
                    document.getElementById("msgcep").innerHTML = "CEP Inválido";
                    $('#input-rua').val('');
                    $('#input-cidade').val('');
                    $('#input-bairro').val('');
                    $('#input-estado').val('');
                    $('#input-complemento').val('');
                }
            });
            return true;
        }
        else {
            document.getElementById("msgcep").innerHTML = "CEP Inválido";
            $('#input-rua').val('');
            $('#input-cidade').val('');
            $('#input-bairro').val('');
            $('#input-estado').val('');
            $('#input-complemento').val('');
            return false;
        }
    }
    else if (cep == '') {
        $('#input-rua').val('');
        $('#input-cidade').val('');
        $('#input-bairro').val('');
        $('#input-estado').val('');
        $('#input-complemento').val('');
    }
    else {
        document.getElementById("msgcep").innerHTML = "";
        return false;
    }
}
;
function validarEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validacaoEmail() {
    var email = $("#input-email").val();
    if (email != '') {
        if (validarEmail(email)) {
            document.getElementById("msgemail").innerHTML = "";
        }
        else {
            document.getElementById("msgemail").innerHTML = "E-mail Inválido";
        }
        return false;
    }
    document.getElementById("msgemail").innerHTML = "";
}
var isValidPhone = function (phone) {
    var brazilianPhoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
    return brazilianPhoneRegex.test(phone);
};
function validarCelular() {
    var celular = $('#input-celular').val();
    if (celular != '') {
        if (isValidPhone(celular) && celular != '(11) 11111-1111' && celular !=
            '(22) 22222-2222' && celular !=
            '(33) 33333-3333' && celular !=
            '(44) 44444-4444' && celular !=
            '(55) 55555-5555' && celular !=
            '(66) 66666-6666' && celular !=
            '(77) 77777-7777' && celular !=
            '(88) 88888-8888' && celular !=
            '(99) 99999-9999') {
            document.getElementById("msgcelular").innerHTML = "";
            return true;
        }
        else {
            document.getElementById("msgcelular").innerHTML = "Celular inválido";
        }
        return false;
    }
    document.getElementById("msgcelular").innerHTML = "";
}
function validarTelefone() {
    var telefone = $('#input-telefone').val();
    if (telefone != '') {
        if (isValidPhone(telefone) && telefone != '(11) 1111-1111' && telefone !=
            '(22) 2222-2222' && telefone !=
            '(33) 3333-3333' && telefone !=
            '(44) 4444-4444' && telefone !=
            '(55) 5555-5555' && telefone !=
            '(66) 6666-6666' && telefone !=
            '(77) 7777-7777' && telefone !=
            '(88) 8888-8888' && telefone !=
            '(99) 9999-9999') {
            document.getElementById("msgtelefone").innerHTML = "";
            return true;
        }
        else {
            document.getElementById("msgtelefone").innerHTML = "Telefone inválido";
            return false;
        }
    }
    document.getElementById("msgtelefone").innerHTML = "";
}
