const rapid = (myString) => {
    let consonants = [];
    let finalString = "";
    for(let letter of myString){
        if(['a','e','i','o','u'].includes(letter) == false)
            consonants.push(letter.toUpperCase());
    }
    finalString =  consonants.join('');
    return finalString;
};

// Work  above this line; do not change code below
let str = "John";
console.log(rapid(str));
