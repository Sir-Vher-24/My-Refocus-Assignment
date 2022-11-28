const WeightHeight = require("./bmi_calculator");

test ("Test if BMI Calculator result is correct", () => {
    var result = WeightHeight(63,1.73);
    expect(result).toBe(21.04981790236894);
});