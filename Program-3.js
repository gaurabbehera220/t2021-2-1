// Program-3

const input = 12

const outputArr = []


const outFunc = (input) => {
    // var arr2 = []
     let start = 1;

     if(input % 2 == 0){
        for(let i =0 ; i < input -1; i++){ 
            outputArr.push(start);
             start += 2 ;    
             
         }
     }
    
     return outputArr
 }

 const output = outFunc(input)

const result = output.toString()


console.log(`input a = ${input}, then output : ${result}`)