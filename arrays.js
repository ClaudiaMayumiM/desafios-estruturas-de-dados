// Dado um array com números positivos, encontre o tamanho da maior sub-sequência na qual todos os elementos são consecutivos, e dois números consecutivos podem estar em qualquer ordem.


// a -> representa o array 
// n -> representa o tamanho do array 

function findLongestConseqSubseq(a, n) {

    let ord = a.sort((a, b) => a - b);
    console.log(ord);

    let seq = 0;
    let seqMax = 0;

    let i = 0; 

    while (i < n) {

        if (a.length == 0) return;

        (ord[i] == ord[i - 1] + 1) ? seq++ : seq = 1;

        seqMax = Math.max(seqMax, seq);

        i++;
    }

    console.log(seqMax);

}

let a = [2, 6, 1, 9, 4, 5, 3];
// let a = [1, 9, 3, 10, 4, 20, 2];
// let a = [9, 11, 45, 12, 67, 13, 56, 14, 8];
// let a = [3, 59, 4, 768, 5, 767];
// let a = [];

findLongestConseqSubseq(a, 7);
