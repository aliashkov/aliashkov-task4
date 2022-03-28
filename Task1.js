function add(...args) {
  let a = args.reduce((a, b) => a + b, 0);

  return function (...args) {
    let b = args.reduce((a, b) => a + b, 0);

    if (b)
      return add(a + b);

    return a
  }
}


console.log(add(1)(4)(7)()); //3
console.log(add(1)(2)(3)(4)()); //10
