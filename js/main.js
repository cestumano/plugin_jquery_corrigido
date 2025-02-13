$(document).ready(function () {
    // Aplicando máscaras aos campos
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, preencha seu nome",
            email: {
                required: "O e-mail é obrigatório",
                email: "Informe um e-mail válido"
            },
            telefone: "Informe um número de telefone válido",
            endereco: "Informe seu endereço",
            cep: "Informe um CEP válido",
            cpf: "Informe um CPF válido"
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha todos os campos obrigatórios para prosseguir com a compra!");
        }
    });
});
