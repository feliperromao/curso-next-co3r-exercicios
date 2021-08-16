export default function(numeros = 6) {
    // retornar array de numeros com no minimo 6 posições
    // que cada numero seja de 0 ate 60
    const values = []
    const min = 0;
    const max = 60;

    for(let x = 1; x <= numeros; x++) {
        const newValue = Math.random() * (max - min) + min
        values.push(Math.floor(newValue))
    }

    return values;
}