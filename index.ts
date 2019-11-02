class Pessoa{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

let pessoa = new Pessoa('Gildinei');
console.log('Instância de pessoa:', pessoa);