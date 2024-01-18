const formulario = document.getElementById('form-comparador')
const msgErro = '<b>ATENÇÃO:</b> O número do segundo campo precisa ser maior.'
const msgSucesso = 'Formulário enviado com sucesso!'

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    var campo1 = document.getElementById('valor1').value
    var campo2 = document.getElementById('valor2').value

    var campo1number = parseInt(campo1, 10);
    var campo2number = parseInt(campo2, 10);

    var containerMsgVariavel = document.querySelector('.msg-variavel')
    
    if (campo2number > campo1number) {
        containerMsgVariavel.innerHTML = msgSucesso;
        containerMsgVariavel.style.display = 'block'
        containerMsgVariavel.style.backgroundColor = 'green'
        document.getElementById('valor1').value = '';
        document.getElementById('valor2').value = '';
    }
    else {
        containerMsgVariavel.innerHTML = msgErro;
        containerMsgVariavel.style.display = 'block'
        containerMsgVariavel.style.backgroundColor = 'red'
    }
})