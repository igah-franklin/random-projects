"use strict";

//we work for a company building a smart home thermometer
//calculate the temperature amplitude
//sometimes there might be sensor errors
const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = ["error", 4, 13, 7, 15, 16, 9, 5];

const temperatureAmplitude = (arr1, arr2) => {
  const arrVal = [...new Set([...arr1, ...arr2])];
  let max = arrVal[0];
  let min = arrVal[0];
  for (let i = 0; i < arrVal.length; i++) {
    const currentTemp = arrVal[i];
    if (Number.isNaN(arrVal[i])) continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return [min, max, max - min];
};

console.log(temperatureAmplitude(temperatures1, temperatures2));

//temperature measurement in kelvin

const temps = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("enter a value")),
  };
  console.table(measurement);
  //return measurement.value + 273;
};

console.log(temps());
