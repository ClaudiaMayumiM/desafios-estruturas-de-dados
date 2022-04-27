// Crie um método chamado findMiddle. Esse método deve retornar o elemento do meio da lista. Caso o tamanho seja par ("2 meios") retorne o segundo.

// [11, 22, 33, 44, 55, 66, 77, 88]
// -> 55 

class Node {
    constructor(num) {
        this.num = num;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(num) {
        const node = new Node(num);
        let atual;

        if (this.head == null) {
            this.head = node;
        } else {
            atual = this.head;

            while (atual.next) {
                atual = atual.next;
            }

            atual.next = node;
        }

        this.size++;

    }

    findMiddle() {
        let meio = this.head;

        if ((this.size % 2) != 0) {
            for (let i = 0; i < Math.floor(this.size / 2); i++) {
                meio = meio.next;
            }
        } else {
            for (let i = 0; i < (this.size / 2); i++) {
                meio = meio.next;
            }
        }

        return meio.num;

    }

}

let lista = new LinkedList();

lista.add(11);
lista.add(22);
lista.add(33);
lista.add(44);
lista.add(55);
lista.add(66);
lista.add(77);
lista.add(88);

// [11, 22, 33, 44, 55, 66, 77, 88]
// -> 55 

let meio = lista.findMiddle();
console.log(meio);





