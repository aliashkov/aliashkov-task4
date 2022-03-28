function sortArray(array) {
    let modifiedArray = array.filter(n => n % 2).sort((a, b) => a - b);

    for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 === 0)
            modifiedArray.splice(j, 0, array[j]);
    }

    return modifiedArray;
}

console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
