const arrayLikeObject = {
    0: "item1",
    1: "item2",
    2: "item3",

    toString() {
        let res="";
        let length = 0;
        for(let item in arrayLikeObject) {
            length++;
        }
        for (let i = 0; i < length-1; i++) {
            res+= this[i];
            if(i<length-2) res+=","
        }
        return res;
    }
};

console.log(arrayLikeObject.toString()); // Output: "item1,item2,item3"