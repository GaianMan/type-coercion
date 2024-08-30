const bankAccount = {
    balance: 1000,
    interestRate: 0.05,

    applyInterest: function (newInterestRate) {
    const rateToApply = newInterestRate !== undefined ? newInterestRate : this.interestRate;
    this.balance += this.balance * rateToApply;
    }
};

console.log(bankAccount.applyInterest());
