function fact(n) {
    if( n === 0 || n=== 1) return 1;

    let result = 1
    for(let i = 1; i <= n; i++){
     result *= i
    }
    
    return result
}

console.log(fact(5))