 //BMI = Weight(KG)/[Height(M)]**2
//function computeBMI(name){
    function WeightHeight(weight,height){return weight/(height)**2};
//         let BMI = weight/(height)**2;
//         console.log(name);
//         console.log(`Your BMI is ${BMI}.`);
//     }return WeightHeight;
// };
const result = WeightHeight(63,1.73);
console.log(result);
// const result = computeBMI("Louver Rai Corpus");
// result(63,1.73);
module.exports = WeightHeight;
