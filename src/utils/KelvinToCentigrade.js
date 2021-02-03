export const KelvinToCentigrade = (temp) => {

   const kelvin = 273.15
   const result = temp - kelvin

   return result % 1 === 0 ? result : result.toFixed(0)
}