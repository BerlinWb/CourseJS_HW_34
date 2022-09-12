const insertWordInto = (str) => {
    let step = 0;
    return (word) => { 
        let array = str.split(' ');
        if (step === array.length + 1) step = 0;
        array.splice(step, 0, word);
        step += 1;
        return array.join(' ');
    };
};

const str = "hello world";
const insert = insertWordInto(str);
console.log(insert("odesa"));
console.log(insert("odesa"));
console.log(insert("odesa"));