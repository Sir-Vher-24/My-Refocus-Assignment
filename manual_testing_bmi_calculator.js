//function computeBMI(name){
    function WeightHeight(weight,height){return weight/(height)**2};
        //let BMI = weight/(height)**2;
         //console.log(name);
         //console.log(`Your BMI is ${BMI}.`);
    //}return WeightHeight;
//};

 //const result = computeBMI("Louver Rai Corpus");
 //result(63,1.73);

function test(){
     const result1 = WeightHeight(63,1.73);
     const expected = 21.04981790236894;

     console.assert(
         result1 === expected,
         `Expected: ${expected} Received: ${result1}`
     );
 };
 test();