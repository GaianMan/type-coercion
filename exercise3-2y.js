const product={
    name : "Book",
    price:1000,

    valueOf() {
        return this.price;
    }
};
console.log(product+500);
