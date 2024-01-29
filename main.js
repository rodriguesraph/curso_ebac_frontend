$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const inputTarefa = $('#cadastro-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(inputTarefa).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#cadastro-tarefa').val('');
    })
})