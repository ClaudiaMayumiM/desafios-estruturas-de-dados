// Crie um método chamado sortAnagrams. Esse método deve receber um array de strings, e fazer com que os anagramas sejam impressos próximos.

// exemplo: ['deli', 'lemon', 'idle', 'leap', 'pale', 'melon']

// saida: [ 'deli', 'idle', 'lemon', 'melon', 'leap', 'pale' ]


function sortAnagrams (lista) {

    let anagramaOrd = new Map;

    for (let i = 0; i < lista.length; i++) {

        let palavraOrd = lista[i].split("").sort().join("");
        
        if(anagramaOrd.has(palavraOrd)) {
            anagramaOrd.get(palavraOrd).push(lista[i]);
        } else {
            anagramaOrd.set(palavraOrd, [lista[i]]);
        }

    }

    lista = [].concat(...anagramaOrd.values(anagramaOrd));

    console.log(anagramaOrd);
    console.log(lista);    

}

lista = ['deli', 'lemon', 'idle', 'leap', 'pale', 'melon'];
// lista = ['alegria', 'carro', 'alergia', 'corar', 'muro', 'galeria', 'rumo'];

sortAnagrams(lista);