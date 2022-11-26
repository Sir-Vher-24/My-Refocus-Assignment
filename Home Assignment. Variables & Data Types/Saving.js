// Sam want to save 10,000 pesos
// Sam has 7,500 pesos

let targetSavings = 10000; // target amount to be saved
let actualSavings = 7500; // actual savings
let percent = 100; // convert numbers into percent
let neededMoney = targetSavings - actualSavings;// amount needed to reach 10000 
let percentageSavings = neededMoney / targetSavings * percent;// percentage of the amount needed to reach 10000
console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentageSavings} away from your goal of saving ${targetSavings}`);