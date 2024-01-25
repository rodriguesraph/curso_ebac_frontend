const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./midia/aprovado.png" alt="Emoji feliz" />';
const imgReprovado = '<img src="./midia/reprovado.png" alt="Emoji triste" />';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const vetorNomes = [];
const vetorNotas = [];
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

var linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    attTabela();
    attMedia();
});

function addLinha() {
    const inputNome = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    if (vetorNomes.includes(inputNome.value)) {
        alert(`A atividade ${inputNome.value} já existe.`);
    } else {
        vetorNomes.push(inputNome.value);
        vetorNotas.push(parseFloat(inputNota.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputNota.value = '';
}

function attTabela() {
    const conteudoTabela = document.querySelector('tbody');
    conteudoTabela.innerHTML = linhas;
}

function calcMedia() {
    let somaNotas = 0;

    for (let i = 0; i < vetorNotas.length; i++) {
        somaNotas = somaNotas + vetorNotas[i];
    }

    return somaNotas / vetorNotas.length;
}

function attMedia() {
    const mediaFinal = calcMedia();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}