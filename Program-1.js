// SIMPLE CALCUTATOR PROGRAM 
// -- WRITTEN IN JAVASCRIPT  
// -- Operations Addition,Subtraction, Multification and  Division using Class



let output;
let inputNum1 = 34;
let inputNum2 = 56;
let operator = "/" 

const toe = operator

const a = parseFloat(inputNum1);

const b = parseFloat(inputNum2)



class Calculate {
    constructor(a, b, toe){
        this.a = a;
        this.b = b;
        this.toe = toe;
    }

    evaluate(){
        switch(this.toe){
            case '+':
                output =  this.a + this.b;
                console.log(`${this.a} ${this.toe} ${this.b} = ${output}`)
                break
            case '-':
                output =  this.a - this.b;
                console.log(`${this.a} ${this.toe} ${this.b} = ${output}`)
                break
            case 'x':
                output =  this.a * this.b;
                console.log(`${this.a} ${this.toe} ${this.b} = ${output}`)
                break
            case '/':
                output =  this.a / this.b;
                console.log(`${this.a} ${this.toe} ${this.b} = ${output}`)
                break

            default: 
            console.log("wrong operator")
        }
    }
    

}

const calculate = new Calculate(a,b,toe)

console.log(calculate.evaluate())
