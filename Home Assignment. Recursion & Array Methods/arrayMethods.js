//Find the most used item on the array
const arr = [
    "Web Developer","Refocus","Web Developer","Web Developer","Refocus","Awesome"
];
var web = arr.filter(w => w == "Web Developer").length; 
var ref = arr.filter(r => r == "Refocus").length;
var awe = arr.filter(a => a == "Awesome").length;

const filtered = {"Web Developer": web, "Refocus": ref, "Awesome": awe};
console.log(filtered);