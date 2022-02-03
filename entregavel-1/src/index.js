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

const fibonacci = (number) =>{
    if(number <= 2){
        return number-1
    }

    return fibonacci(number-1)+fibonacci(number-2)
}

const mdc = (x,y) =>{
    let remainder = x<y ? x:y

    while (remainder > 0){
        remainder = x % y;
        x = y;
        y = remainder;
    } 

    return x;
}

const quickSort = (lst) => {
    if(lst.length < 2)
        return lst 
    
    const pivot = lst[Math.floor(Math.random()*lst.length)]

    let left = []
    let right = []
    let equals = []

    for(let value of lst){
        if(value < pivot){
            left.push(value)
        }

        if(value > pivot){
            right.push(value)
        }

        if(value == pivot){
            equals.push(value)
        }
    }

    return [...quickSort(left),...equals,...quickSort(right)]
}

//HTML connections

function handleClickPrime(){
    const responseTitle = document.getElementById('response')
    const value = document.getElementById('inputPrime').value

    const text = isPrimerWithSqrt(value) ? `${value} é primo` : `${value} NAO é primo`

    responseTitle.innerHTML = text
}


