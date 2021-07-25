function calcularMediaAritmetica(numbers) {
    const reducer = (accumulator, currentValue = 0) => accumulator + currentValue;
    const addTheNumbers = numbers.reduce(reducer);
    const averageNumber = addTheNumbers / numbers.length;

    return averageNumber;
}

console.log(calcularMediaAritmetica([20, 20, 40, 40]))