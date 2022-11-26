/* The news company needs to find the first uppercase letter in each of their articles.
Create an algorithm which checks a text and finds its first uppercase letter.

In the text "there is a storm coming to the East of the Philippines", the result is "E".
In the text "no more rainy days here, sun is about to show up" there are no uppercase letters.
Use console messages to make sure that users are aware of this fact.*/
////////////////////TASK 1///////////////////////////////
function checkPhrase(text){
if (text == text.toLowerCase()){
    return console.log("There are no uppercase in this phrase.")
}else{ let capital = text.replace(/[^A-Z]/g,'');
    return console.log("The first uppercase in this phrase is " + capital[0]); 
}};
checkPhrase("there is a storm coming to the East of the Philippines");
///////////////////TASK 2///////////////////////////
function checkText(text2){
if (text2 == text2.toLowerCase()){
    return console.log("There are no uppercase in this phrase.")
}else{ let capital = text2.match(/[A-Z]/g);
    return console.log("The uppercase in this phrase are " + capital);
}};
checkText("no more rainy days here, sun is about to show up");