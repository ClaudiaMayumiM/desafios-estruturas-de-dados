// crie uma pilha que permita remover e adicionar N elementos de uma só vez 
// a estrutura deve conter 2 funções:
// add (N, ...elements) para a inserção de N elementos 
// remove (N) para a remoção de N elementos
// a estrutura não deve permitir receber elementos duplicados
// a estrutura deve conter os tratamentos para não realizar operações indevidas (exemplo: remover mais do que o tamanho total)

class Pilha {
    constructor() {
        this.lista = [];
    }

    add(n, elementos) {

        let unoElem = [... new Set(elementos)];
        
        this.lista = [unoElem, ...this.lista];

        this.lista = unoElem.concat(...this.lista);
        this.lista = [... new Set(this.lista)];
        
        return this.lista;
    }
    
    remove(n) {

        if (this.lista.length == 0) return;
        if (n > this.lista.length) {
            console.log("Operação não realizada! Valor maior que o número total de elementos!");
            return;
        }

        this.lista.splice(0, n);

        return this.lista;
    }

}

const minhaPilha = new Pilha;

let elementos = [1, 2, 3, 3, 2, 1];

minhaPilha.add(6, elementos);
minhaPilha.add(6, [4, 5, 6, 6, 5, 4]);
minhaPilha.add(6, [7, 8, 9, 9, 8, 7]);
console.log(minhaPilha.lista);
minhaPilha.remove(4);
console.log(minhaPilha.lista);