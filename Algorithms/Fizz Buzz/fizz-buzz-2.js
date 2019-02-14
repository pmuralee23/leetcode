var fizzBuzz = function(n) {
    let arr = [];
    for(let i=1; i<=n; i++){
        arr.push((i%3==0?'Fizz':'')+(i%5==0?'buzz':'')|| ''+i);
    }
    return arr;
};
