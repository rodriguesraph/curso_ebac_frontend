let alunos = ['João'];

alunos = alunos.map(function(item) {
    return {
        nome: item,
        nota: 7
    }
});

alunos.push({
    nome: 'Maria',
    nota: 9
});

alunos.push({
    nome: 'José',
    nota: 4
});

alunos.push({
    nome: 'Marlene',
    nota: 5
});

alunos.push({
    nome: 'Reginaldo',
    nota: 10
});

console.log('Essa é a lista de todos os alunos:');
console.log(alunos);

function filtraMedia(aluno) {
    return aluno.nota >= 6;
}

const mediaNecessaria = alunos.filter(filtraMedia);

//const mediaNecessaria = alunos.filter((item) => item.nota >= 6); (resolução SEM uso de funções)

console.log('Os alunos com nota média ACIMA DE 6 são:');
console.log(mediaNecessaria);