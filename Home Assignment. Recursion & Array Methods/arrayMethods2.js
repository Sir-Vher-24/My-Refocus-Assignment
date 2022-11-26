let InvoiceList = ["Invoice 008", "Invoice 007", "Invoice 006","Invoice 005"];

function insertToBottom(){
InvoiceList.push( "Invoice 004" , "Invoice 003" , "Invoice 002" , "Invoice 001" );
console.log(InvoiceList.join (" "));  
};

function reverseList(){  
InvoiceList.reverse()
console.log(InvoiceList.join (" "));
};
 
insertToBottom()
reverseList();
