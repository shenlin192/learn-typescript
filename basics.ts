console.log('hello world!!')

function add (n1: number, n2: number, showResult: boolean, resultPhase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(resultPhase + result);
    }
    return result;
}

let number1 = 5;
const number2 = 8;
const printResult = true;
const resultPhase = 'Result is'

const result = add(number1, number2, printResult, resultPhase);


