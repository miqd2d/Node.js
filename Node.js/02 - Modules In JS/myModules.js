function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function division(a,b){
    if(b==0){
        throw new Error("Cannot divide by zero");
    }
    else {
        return a/b;
    }
}

console.log("\n*********Inside the module wrapper***********\n");
console.log("Wrapper File name : ", __filename);
console.log("Wrapper Dir Name : ",__dirname);
console.log("Executed because of the Node Module Wrapper Feature\n")

module.exports = {sum , sub , multiply , division};

/*

Node Module Wrapper
Every module is wrapped in a function before it's executed. 

(
    function(exports , require , module , __filename , __dirname){
        // your module code
    }
)

Bascially if you have any code that in the file that's exporting the modules -> It will execute upon the calling of the module.

*/