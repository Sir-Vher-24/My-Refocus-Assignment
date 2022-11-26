// Cycling for 30 mins burns 225 calories.
// Sam decides to cycling 30 minutes a day for 15 days.
let caloriesPerHour = 450; // cycling for 60 minutes burns 450 calories
let numTimesSamCycle = 15; // number of days Sam will cycle
let numHourPerDay = 0.5; // Sam cycle per hour a day
let totalHoursCycling = numHourPerDay * numTimesSamCycle; // total numbers of hour cycling per week
let totalCaloriesBurned = totalHoursCycling * caloriesPerHour; // total number of calories burned
console.log(`Great work, Sam! After ${numHourPerDay} of cycling every day for 15 days, you may lose a total of ${totalCaloriesBurned} calories`)