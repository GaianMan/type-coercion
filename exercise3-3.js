const customDate = {
    day: 18,
    month: 8,
    year: 2024,
    toString(){
        const dayString = String(this.day).padStart(2, '0');
        const monthString = String(this.month).padStart(2, '0');
        return `${monthString}/${dayString}/${this.year}`;
    },
    valueOf() {
        const date = new Date(this.year, this.month - 1, this.day);
        return date.getTime();
    }
};

console.log(String(customDate));
console.log(+customDate);

const daysSinceEpoch = Math.floor(+customDate / (1000 * 60 * 60 * 24));
console.log(daysSinceEpoch);