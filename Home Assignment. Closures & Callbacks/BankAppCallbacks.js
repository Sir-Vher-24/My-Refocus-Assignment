function createBankAccount(name,amount,balance,callback){
        console.log(name)
        console.log(balance)
        callback(name,amount,balance)     
};
function depositAmount(name,amount,balance){
        console.log(`Transaction success, you deposited the amount of P${amount}`)
        console.log(`Your new balance is ${balance + amount}`)
};
function withdrawAmount(name,amount,balance){
        if (amount <= balance){
        console.log(`Transaction successful`);  
        console.log(`You withdrew the amount of P${amount}`);
        console.log(`Your new balance is P${balance - amount}`)   
        }else{(amount > balance)
        console.log(`Transacion failed, insufficient balance!`)
        }return withdrawAmount;
};
createBankAccount('Louver Rai Corpus',3000,10000,depositAmount);
createBankAccount('Louver Rai Corpus',3000,10000,withdrawAmount);
createBankAccount('Louver Rai Corpus',13000,10000,withdrawAmount);