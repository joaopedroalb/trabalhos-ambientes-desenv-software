function isPrimerWithSqrt(number){
    //https://www.youtube.com/watch?v=4tbuSPSqQWU
    //Para facilitar o loop a gente pega a raiz  do numero e gerar um numero bem menor para o loop
    let sqrtNumber = Math.sqrt(number)

    for(let i = 2; i <= sqrtNumber; i++){
        if(number % i === 0) return false
    }

    return number > 1 
}

function isPrime(number){
    for(let i = 2; i < number; i++){
        if(number % i === 0) return false
    }

    return number > 1 
}

