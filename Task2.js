function digital_root(n) {
    let sum = 0;

    if (n < 10)
        return n;
        
    for (let i = 0; i < String(n).length; i++)
        sum += Number(String(n)[i]);
     
    return digital_root(sum);
}


console.log(digital_root(16));
console.log(digital_root(58));
console.log(digital_root(123456));
