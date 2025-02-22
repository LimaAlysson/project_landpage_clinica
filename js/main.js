$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    });

    $('form').validate( {
        rules: {
            nome: {required: true},
            email: {required: true, email: true},
            telefone: {required: true, minlength: 15},
            mensagem: {required: true},
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira um telefone válido',
        },

        submitHandler: function(form) {
            let camposIncorretos = validator.numberOfInvalids();
            if(camposIncorretos){
                alert('Preencha todos os campos corretamente');
            }
        }
    });

})

