function add (n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result:' + num);
}

printResult(add(5, 12))

let combineValue: (a: number, b: number) => number;
combineValue = add;
// combineValue = printResult;

console.log(combineValue(1,2))

function  addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    const hi = cb(result);
    console.log(hi);
}

addAndHandle(1,2, (result) => {
    
})