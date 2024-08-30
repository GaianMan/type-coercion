const userOBJ={
    firstName : "John",
    lastName : "Doe",
    age:30,
    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }
};
console.log(userOBJ.toString());
