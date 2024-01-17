const formulario = document.getElementById('form-comparador')

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    var campo1 = document.getElementById('valor1').value
    var campo2 = document.getElementById('valor2').value

    var campo1number = parseInt(campo1, 10);
    var campo2number = parseInt(campo2, 10);
    
    if (campo2number > campo1number) {
        alert('Formulário enviado com sucesso!');
        document.getElementById('valor1').value = ''
        document.getElementById('valor2').value = ''
    }
    else {
        alert('ATENÇÃO: O número do segundo campo precisa ser maior.')
    }
})