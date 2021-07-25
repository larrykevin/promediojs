const lista1 = [
    1,
    2,
    2,
    2,
    1,
    3,
    3,
    3,
    8,
    8,
    9,
    2,
    2,
    3,
    3,
    2,
];

const lista1Count = {};

lista1.map(
    function (index) {
        if (lista1Count[index]) {
            lista1Count[index] += 1;
        } else {
            lista1Count[index] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    (valorA, valorB) => valorA[1] - valorB[1]
);

const moda = lista1Array[lista1Array.length - 1];

console.log(moda);