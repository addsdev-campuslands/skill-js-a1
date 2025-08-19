function sumar(a, b) {
    console.log("hola desde sumar");
    return a + b
}

//let resultado = sumar(5, 100);
//console.log(resultado);
/**
 * Funcion para decodificar los conjuros del codice de hechiceria 🧙.
 * @param {string} simbolos 
 */
function decodeSpell(simbolos) {//abc = ['a','b','c']
    let equivalencias = new Map();
    equivalencias.set("☽", 1);
    equivalencias.set("☾", 5);
    equivalencias.set("♁", 10);
    equivalencias.set("⚕", 50);
    equivalencias.set("⚡", 100);
    
    let resultado = 0;

    for (let i = 0 ; i < simbolos.length; i++) {
        let simbolo = simbolos[i];//☽
        let valor = equivalencias.get(simbolo);//1
        //console.log('actual:' +simbolo);
        //console.log('Siguiente:'+simbolos[i + 1]);
        
        let valorProximo = equivalencias.get(simbolos[i + 1]);//1
        if(valor === undefined) {
            return NaN; //Corrupto
        }
        if(valor < valorProximo) {
            valor = valor * -1;
        }
        resultado += valor;
        //console.log(`Fin iteraccion for`);
        
    }
    return resultado;
}

console.log(decodeSpell('☽☽☽')); // 3
console.log(decodeSpell('⚕.♒')); // NaN
console.log(decodeSpell('☽☾')); // 4 (5 - 1)
console.log(decodeSpell('☾☽')); // 6 (5 + 1)
console.log(decodeSpell('☾☽☽☽')); // 8 (5 + 3)
console.log(decodeSpell('☽☽☽⚡')); // 101 (1 + 1 + (100 - 1))
console.log(decodeSpell('☽⚕⚡')); // 49 (-1 - 50 + 100)

//Set -> Evitar elementos duplicados las ordena....
const numeros = new Set([1,5,2,3,2]); // -> 2
numeros.size
numeros.has(xelemento)//  -> true / false
numeros.delete(xelemento)// -> true / false
numeros.add(xelemento)// -> Set
numeros.clear()