// assignment 1 - Values and Variables
const country = 'Portugal'
const continent = 'Europe'
let population = 15
// console.log('A1 =>', country, continent, population)

// assignment 2 - Data Types
let isIsland = false
let language

// console.log(
//   'A2 =>',
//   typeof isIsland,
//   typeof population,
//   typeof country,
//   typeof language
// )

// assignment 3 - let, const and var
language = 'portuguese'
// console.log(
//   'A3 =>',
//   typeof isIsland,
//   typeof population,
//   typeof country,
//   typeof language
// )

// assignment 4 - basic operators
// 1.
let halfCountryPopulation = population / 2
// 2.
population++
// 3.
const filandPopulation = 6
const portugalHasMorePopulation = population >= filandPopulation
// 4.
const averageCountryPopulation = 33
const portugalHasLessPopulation = population <= averageCountryPopulation
// 5.
let description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  'M people speak ' +
  language

// console.log(
//   'A4 =>',
//   population,
//   portugalHasMorePopulation,
//   portugalHasLessPopulation,
//   description
// )

// assignment 5 - strings and template literals
description = `${country} is in ${continent}, and its ${population}M people speak ${language}`
// console.log('A5 =>', description)

// assignment 6 - taking decisions: if/else statements
// population = 130000000
let countryPopulation

if (population > averageCountryPopulation) {
  countryPopulation = `${country} population is above average`
} else {
  countryPopulation = `${country} population is ${
    averageCountryPopulation - population
  } below average`
}
// console.log('A6 =>', countryPopulation)

// assignment 7 - Type conversion and coercion
// predict the operations without executing them
const n1 = '9' - '5' // 4
const n2 = '19' - '13' + '17' // '617'
const n3 = '123' < 57 // NaN => false
const n4 = 5 + 6 + '4' + 9 - 4 - 2 // 17 => 11 + '4' + 9 => 1149 - 4 - 2 => 1143

// execute the operations and check if the results are correct
// console.log(n1, n2, n3, n4)

// assignment 8 - Equality Operators
let msg
// const numNeighbours = prompt(
//   'How many neighbour countries does your country have?'
// )
const numNeighbours = Number()
// prompt('How many neighbour countries does your country have?')

// if (numNeighbours == 1) {
if (numNeighbours === 1) {
  msg = 'Only 1 border!'
} else if (numNeighbours > 1) {
  msg = 'More than 1 border!'
} else {
  msg = 'No borders!'
}
// console.log('A8 =>', msg)

// assignment 9 - Logical Operators

if (language === 'english' && population < 50 && !isIsland) {
  msg = `You should live in ${country} :)`
} else {
  msg = `${country} does not meet your criteria :(`
}

// console.log('A9 =>', msg)

// assignment 10 - Switch Statement
const lang = 'portuguese'
switch (lang) {
  case 'chinese':
  case 'mandarin':
    msg = 'MOST number of native speakers!'
    break
  case 'spanish':
    msg = '2nd place in number of native speakers!'
    break
  case 'english':
    msg = '3rd place in number of native speakers!'
    break
  case 'hindi':
    msg = '4th place in number of native speakers!'
    break
  case 'arabic':
    msg = '5th most spoken language!'
    break
  default:
    msg = 'Great language too :D!'
    break
}
// console.log('A10 =>', msg)

// assignment 11 - Conditional (Ternary) Operator
population = 130
// console.log(
//   'A11 => ',
//   `Portugal population is ${population > 33 ? 'above' : 'below'} average`,
//   population
// )
