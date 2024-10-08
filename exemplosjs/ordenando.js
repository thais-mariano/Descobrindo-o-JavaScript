const swap = (array, positionA, positionB) => {

}

const shuffle = (array, quantity) => {

    if (quantity == 0 || quantity === "") {
        alert("Selecione pelo menos a quantidade mínima para embaralhar os números (Mínimo: 1)")
    }

    while (quantity != 0) {
        let newPosition = Math.floor(Math.random() * array.length);
        quantity--;

        [array[array.length], array[newPosition]] = [
            array[newPosition], array[array.length]
        ];

    }

}

const bubbleSort = (array) => {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            // exemplo: [2, 1]
            // posição 0 > posição 1?
            // 2 > 1 = verdadeiro
            if (array[j] > array[j + 1]) {
                let temporary = array[j];
                // posição 0 = 1
                array[j] = array[j + 1];
                // posição 1 = 2
                array[j + 1] = temporary;
            }
        }
    }

}

const selectionSort = (array) => {
    let length = array.length;

    for (let i = 0; i < length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temporary = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temporary;
        }
    }

}

const quickSort = (array, initialPosition, finalPosition) => {
    if (initialPosition < finalPosition) {
        let pivotValue = partition(array, initialPosition, finalPosition);
        quickSort(array, initialPosition, pivotValue - 1);
        quickSort(array, pivotValue + 1, finalPosition);
    }

}

const partition = (array, initialPosition, finalPosition) => {
    let pivot = array[finalPosition];
    let i = initialPosition;
    for (let j = initialPosition; j < finalPosition; j++) {
        if (array[j] < pivot) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
        }
    }
    [array[i], array[finalPosition]] = [array[finalPosition], array[i]];
    return i;

}