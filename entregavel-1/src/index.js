const isPrimerWithSqrt = (number) =>{
    //https://www.youtube.com/watch?v=4tbuSPSqQWU
    //Para facilitar o loop a gente pega a raiz  do numero e gerar um numero bem menor para o loop
    let sqrtNumber = Math.sqrt(number)

    for(let i = 2; i <= sqrtNumber; i++){
        if(number % i === 0) return false
    }

    return number > 1 
}

const isPrime = (number) => {
    for(let i = 2; i < number; i++){
        if(number % i === 0) return false
    }

    return number > 1 
}

const summation = (lstNumber) => {
    return lstNumber
            .map((value)=>{return Number.isInteger(value)&&value})
            .reduce((a,b)=>{return a+b})
}
