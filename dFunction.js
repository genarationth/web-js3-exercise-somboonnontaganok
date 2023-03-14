costPaymentCalculations = (cost) => {
    let fee = 3;
    let interstFee = cost * 0.01;
    let totalCost = cost + interstFee + fee;
    return totalCost;
};

console.log(costPaymentCalculations(20));
