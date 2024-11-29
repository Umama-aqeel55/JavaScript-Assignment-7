// Q8
export function add(a , b){
    return a + b;
};
 
export function subtract(a , b){
    return a - b;
};

export function multiply(a , b){
    return a * b;
};

export function  divide( a , b){
    if ( b === 0){
        throw new Error("Error: Division by zero is not allolwed");
    };
    return a / b;
};
