const userAccount = {
        "bankAccountId": "E212-B-LIMA5",//which is autogenerated
        "accountNumber": 1010203040 ,
        "username" : "harana",
        "password" : "parokya", 
        "pin" : 1234,//which is an array with username, password and pin
        "balance" : 10000,//which is an amount of money
        "createdAt" : "November 16, 2022",//which is a date
    "debitCArd" : 101020304050, //Which is a card number.
    "firstName" : "Louver Rai",
    "lastName" : "Corpus" ,
    "birthDate" : "November 1, 2000",
    "validID" : [{  "ID1" : "passport",
                        "IDno1" : 12345678900,
                        "ID2" : "driver's license",
                        "IDno2" : 12345678901}],
        "address" : "Poblacion, Tagaytay City, Cavite",
    "displayUserAccount" : function(){
            console.log(this.bankAccountId)
            console.log(this.accountNumber)
            console.log(this.username)
            console.log(this.password)
            console.log(this.pin)
            console.log(this.balance)
            console.log(this.createdAt)
            console.log(this.debitCArd)
            console.log(this.firstName , this.lastName)
            console.log(this.birthDate)
            for (details of this.validID){
                console.log(details.ID1) 
                console.log(details.IDno1)
                console.log(details.ID2)
                console.log(details.IDno2)}
            console.log(this.address)}
};
userAccount.displayUserAccount();
/////////////CHECK ACCOUNT THRU USERNAME AND PASSWORD//////////
function getBankAccountDetails(username1,password1){
    if (password1 == password1 , userAccount.username != username1){
            console.log("Unable to access, incorrect username!")
    }else if (userAccount.username == username1 , userAccount.password == password1){
        console.log(userAccount.displayUserAccount());       
    }else {(userAccount.password != password1 , username1 == username1);
            console.log("Unable to access, incorrect password!")
        }   
};
const accountDetails = getBankAccountDetails("harana","parokya");
////////////DEPOSIT MONEY WITH USERNAME AND PASSWORD CHECKING, AND DEPOSIT USING ACCOUNTNUMBER///////
function depositMoney(username1,password1){
        let username = userAccount.username;
        let password= userAccount.password;
        let balance = userAccount.balance;
        let accountnumber = userAccount.accountNumber;
        if (password1 == password1 , username != username1){
            function accessDenied(){
                console.log("Unable to access, incorrect username!")
            }return accessDenied;
        }else if (username == username1 , password == password1){
            function depositAmount(amount,accountnumber1){
                if (accountnumber == accountnumber1){
            console.log(userAccount.displayUserAccount());
            console.log(`You have deposited P${amount}!`)
            console.log(`Your new balance is P${balance + amount}`)}
                else{
                    console.log(`Access denied, incorrect account number.`)
                };
        }return depositAmount;        
        }else {(password != password1 , username1 == username1);
            function accessDenied2(){
                console.log("Unable to access, incorrect password!")
            }}return accessDenied2;    
};
const depositcash = depositMoney("harana","parokya");
depositcash(300,101020304);
//////////////WITHDRAW MONEY WITH USERNAME AND PASSWORD CHECKING, AND DEPOSIT USING ACCOUNTNUMBER///////
function withdrawMoney(username1,password1){
    let username = userAccount.username;
    let password= userAccount.password;
    let balance = userAccount.balance;
    let accountnumber = userAccount.accountNumber;
    if (password1 == password1 , username != username1){
        function accessDenied(){
            console.log("Unable to access, incorrect username!")
        }return accessDenied;
    }else if (username == username1 , password == password1){
        function withdrawAmount(amount,accountnumber1){
            if (accountnumber == accountnumber1){
                if (amount <= balance){
        console.log(userAccount.displayUserAccount());
        console.log(`You have deposited P${amount}!`)
        console.log(`Your new balance is P${balance - amount}`)
                 }else{ (amount > balance)
                    console.log(`Transaction failed, insufficient balance.`)};
            }else{
                console.log(`Access denied, incorrect account number.`)
            };
    }return withdrawAmount;        
    }else {(password != password1 , username1 == username1);
        function accessDenied2(){
            console.log("Unable to access, incorrect password!")
        }}return accessDenied2;    
};
const withdrawcash = withdrawMoney("harana","parokya");
withdrawcash(3000,1010203040);