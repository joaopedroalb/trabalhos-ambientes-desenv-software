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


//Numero Primo

function handleClickPrime(){
    const responseTitle = document.getElementById('response')
    const value = document.getElementById('inputPrime').value

    const text = isPrimerWithSqrt(value) ? `${value} é primo` : `${value} NAO é primo`

    responseTitle.innerHTML = text
}

//Somatorio

let qtdeInputSum = 0;

function handleGenerateInputs(){

    const containerGlobal = document.getElementById('containerBg')
    const qtdeInput = document.getElementById('qtdeInput').value
    const inputContainer = document.getElementById('containerInputGenerated')
    inputContainer.style = "display:flex"
    document.getElementById('ContainerInputSelectNumber').style = "display:none"

    if(qtdeInput > 0){

        qtdeInputSum = qtdeInput

        for(let i = 0; i <qtdeInput; i++){
            let container = document.createElement("div")
            let label = document.createElement('label')
            let input = document.createElement('input')

            input.id = `inputSum${i+1}`

            label.innerHTML = `Digite o valor do numero : ${i+1}`
            container.appendChild(label)
            container.appendChild(input)
            inputContainer.appendChild(container)
        }

        let button = document.createElement("button")
        button.innerHTML = "Somar"
        button.className = "btnSum"
        button.id = "sumBtn"
        button.onclick = () => handleClickSum()

        containerGlobal.appendChild(button)
    }
}

function handleClickSum(){
    if(qtdeInputSum > 0 ){
        let lst = []

        for(let i = 0 ; i<qtdeInputSum; i++){
            let id = `inputSum${i+1}`

            const value = isNaN(parseFloat(document.getElementById(id).value)) ? 0:parseFloat(document.getElementById(id).value)

            lst.push(value)
        }

        let sum = summation(lst)
        const oldContainerGlobal = document.getElementById('containerBg')
        const newContainerGlobal = document.getElementById('containerResBg')

        oldContainerGlobal.style = "display:none";
        newContainerGlobal.style = "display: flex"

        const titleRes = document.getElementById('resultTitle')

        titleRes.innerHTML = `O somatorio de ${[...lst]} é ${sum}`
    }
}

function handleRestartSum(){
    qtdeInputSum = 0;
    
    const newContainerGlobal = document.getElementById('containerBg')
    const oldContainerGlobal = document.getElementById('containerResBg')
    const inputContainer = document.getElementById('containerInputGenerated')
    const btnSum = document.getElementById('sumBtn')

    newContainerGlobal.style = "display:flex";
    oldContainerGlobal.style = "display:none"
    inputContainer.style = "display:none"
    inputContainer.innerHTML = ""
    newContainerGlobal.removeChild(btnSum)
    document.getElementById('ContainerInputSelectNumber').style = "display:flex"
}

//Fibonacci 

function handleClickFibo(){
    const value = document.getElementById('fiboInput').value

    if(value>0){
        let responseContainer = document.getElementById('responseContainer')
        responseContainer.innerHTML = ''
        for(let i = 0; i<value; i++){
            let label = document.createElement('label')

            let value = fibonacci(i+1)

            label.innerHTML = value

            responseContainer.appendChild(label)
        }
    }
}

//mdc

function handleClickMdc(){
    const valueA = parseFloat(document.getElementById('firstInput').value)
    const valueB = parseFloat(document.getElementById('secondInput').value)

    let responseContainer = document.getElementById('responseContainer')
    responseContainer.innerHTML = ''

    if(valueA > 0 && valueB > 0 && Number.isInteger(valueA) && Number.isInteger(valueB)){
        const value = mdc(valueA,valueB)
        let label = document.createElement('label')
        label.innerHTML = `O maior divisor comum é ${value}`
        responseContainer.appendChild(label)
    }else{
        let label = document.createElement('label')
        label.innerHTML = "Favor colocar valores validos"
        responseContainer.appendChild(label)
    }
}

//quicksort

function handleClickQuickSort(){
    let lst = document.getElementById('lstSort').value.split(',')
    lst = lst
            .filter(value=>!isNaN(parseFloat(value)))
            .map(value=>{return parseFloat(value)})
    

    const qcksort = quickSort(lst)

    let label = document.createElement('label')
    label.innerHTML = qcksort.length>0?`A lista ordenada: ${[...qcksort]}`:'A lista esta vazia'

    let containerRes = document.getElementById('containerResult')
    containerRes.innerHTML = ''
    containerRes.appendChild(label)
    
}