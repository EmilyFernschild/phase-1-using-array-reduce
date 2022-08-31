const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((add, numbers) => {
    return add + numbers;
});




// const batteries = batteryBatches.reduce(function(countObj, totalBatteries){
//     if (totalBatteries in countObj) {
//         countObj[totalBatteries]++;
//       } else {
//         countObj[totalBatteries] = 1;
//       }
//       return countObj;
//     },
// );
 