function greet(name) {
    return `Hello, ${name}!`;
}

function addLogging(fn) {
    return function (...args) {
        console.log("Calling function with argument(s):");
        console.log(...args);
        const result = fn(...args);
        console.log(`Function returned: ${result}`);
        return result;
    };
}

const addLogging = (fn) =>{
    return (...args) =>{
        console.log("Calling function with argument(s):");
        console.log(...args);
        const result = fn(...args);
        console.log(`Function returned: ${result}`);
        return result;
    }
}