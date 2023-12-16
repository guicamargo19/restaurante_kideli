$(document).ready(function() {
    $('#telefone').mask('(00)0000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
            },
            telefone: {
                required: false,
            },
            mensagem: {
                required: true,
            }
            
        },
        messages: {
            nome: 'Por favor, digite seu nome',
            email: 'Por favor, digite um telefone',
            mensagem: 'Por favor, digite a mensagem',
        },
        
        submitHandler: function(){
            $('.mensagem-enviada').slideToggle()
            $('#nome').val('')
            $('#telefone').val('')
            $('#email').val('')
            $('#mensagem').val('')
        }
    })
})