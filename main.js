const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./midia/aprovado.png" alt="Emoji feliz" />';
const imgReprovado = '<img src="./midia/reprovado.png" alt="Emoji triste" />';

var linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const conteudoTabela = document.querySelector('tbody');
    conteudoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputNota.value = '';
});