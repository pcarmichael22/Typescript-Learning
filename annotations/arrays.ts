const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla, tacoma'], ['camaro']];

// help with inference when extracting values

const cars = carMakers[0];

const myCar = carMakers.pop;

// prevent incompatible values

carMakers.push(100);

carMakers.map((car: string): string => {
  return car;
});

// flexible types

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];

// tuples
