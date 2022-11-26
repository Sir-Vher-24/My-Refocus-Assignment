//////////////DEPOSIT/////////////
let balance = 10000;
function createBankAccount(name){
    console.log(`Hi! ${name}.`);
    function depositAmount(deposit){
        console.log(`You deposited the amount of P${deposit},`);
        console.log(`Youre new balance is P${balance + deposit}.`);
        }return depositAmount;
};
const myAccount = createBankAccount('Louver Rai Corpus');
myAccount(300);

///////////////WITHDRAW//////////////
function createBankAccount2(name){
    console.log(`Hi! ${name}.`);
    function withdraw(amount){
        if (amount <= balance){
                console.log(`Transaction successful`);  
                console.log(`You withdrew the amount of P${amount}`);
                console.log(`Your new balance is P${balance - amount}`)   
            }else{(amount > balance)
                console.log(`Transacion failed, insufficient balance!`)
            }}return withdraw;
};
const withdrawAmount = createBankAccount2('Louver Rai Corpus');
withdrawAmount(1000);
