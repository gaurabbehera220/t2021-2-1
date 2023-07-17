// Program-2


const input = 10

const outputArr = []


const outFunc = (input) => {
   // var arr2 = []
    let start = 1;

    for(let i =0 ; i < input; i++){ 
        outputArr.push(start);
        start += 2 ;    
        
    }
    return outputArr
}

const output = outFunc(input)

const result = output.toString()


console.log(`input a = ${input}, then output : ${result}`)

