function anagrams(word, words) {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].split("").sort().join("") === word.split("").sort().join("")) 
            result.push(words[i]);
    }

    return result;
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); 
