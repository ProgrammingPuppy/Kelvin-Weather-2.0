/* Temperature measured in kelvin */
const kelvin = 0;
console.log(`The temperature is ${kelvin} degrees kelvin`);
/* Convert kelvin to celcius */
const celcius = kelvin - 273;
console.log(`The temperature is ${celcius} degrees celcius`);
/* Convert celcius to farenheit */
let farenheit = (celcius * (9/5) + 32);
/* Math.floor built-in object rounds farenheit down to a whole number */
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Farenheit.`);

/* Convert celcius to newton */
let newton = (celcius * (33/100));
newton = Math.floor(newton);
/* String interpolation embeds variable newton */
console.log(`The temperature is ${newton} degrees Newton.`);





