function Simio(especie, nomeCientifico, tamanho, peso) {
    this.especie = especie;
    this.nomeCientifico = nomeCientifico;
    this.tamanho = tamanho;
    this.peso = peso;
    this.rabo = "sem rabo";
}

function GrandeSimio(especie, nomeCientifico, tamanho, peso, rabo) {
    Simio.call(this, especie, nomeCientifico, tamanho, peso, rabo);
    this.ordem = "grandes símios";
}

function SimioMenor(especie, nomeCientifico, tamanho, peso, rabo) {
    Simio.call(this, especie, nomeCientifico, tamanho, peso, rabo);
    this.ordem = "símios menores";
}

const gorila = new GrandeSimio("Gorila", "Gorilla gorilla", 1.8, 220);
const chimpanze = new GrandeSimio("Chimpanzé", "Pan troglodytes", 1.5, 60);
const gibao = new SimioMenor("Gibão", "Hylobates lar", 0.9, 8);

console.log(`O ${gorila.especie}, nome científico ${gorila.nomeCientifico}, é um símio, ou seja, um primata ${gorila.rabo}, da ordem dos ${gorila.ordem}. Possui, em média, ${gorila.tamanho}m de altura e um peso de ${gorila.peso}kg.`);
console.log(`O ${chimpanze.especie}, nome científico ${chimpanze.nomeCientifico}, é um símio, ou seja, um primata ${chimpanze.rabo}, da ordem dos ${chimpanze.ordem}. Possui, em média, ${chimpanze.tamanho}m de altura e um peso de ${chimpanze.peso}kg.`);
console.log(`O ${gibao.especie}, nome científico ${gibao.nomeCientifico}, é um símio, ou seja, um primata ${gibao.rabo}, da ordem dos ${gibao.ordem}. Possui, em média, ${gibao.tamanho}m de altura e um peso de ${gibao.peso}kg.`);