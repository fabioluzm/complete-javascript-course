'use strict'

// assigment 1 - functions
function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and it's capital city is ${capitalCity}`
  return description
}

const descPortugal = describeCountry('Portugal', 15, 'Lisbon')
const descGermany = describeCountry('Germany', 83, 'Berlin')
const descFinland = describeCountry('Finland', 6, 'Helsinki')

// console.log('A1 => ', descPortugal)
// console.log('A1 => ', descGermany)
// console.log('A1 => ', descFinland)

// assigment 2 - function declarations vs. expressions
const worldPopulation = 7900
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100
}
const percPortugal1 = percentageOfWorld1(15)
const percGermany1 = percentageOfWorld1(83)
const percFinland1 = percentageOfWorld1(6)

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100
}
const percPortugal2 = percentageOfWorld2(15)
const percGermany2 = percentageOfWorld2(83)
const percFinland2 = percentageOfWorld2(6)

// console.log('A2 => ', percPortugal1, percGermany1, percFinland1)
// console.log('A2 => ', percPortugal2, percGermany2, percFinland2)

// assigment 3 - arrow functions
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100
const percPortugal3 = percentageOfWorld3(15)
const percGermany3 = percentageOfWorld3(83)
const percFinland3 = percentageOfWorld3(6)
// console.log('A3 => ', percPortugal3, percGermany3, percFinland3)

// assigment 4 - calling other functions
const describePopulation = function (country, population) {
  return `${country} has a ${population} million people which is ${percentageOfWorld1(
    population
  )}% of the world.`
}

const descPortugalPop = describePopulation('Portugal', 15)
const descGermanyPop = describePopulation('Germany', 83)
const descFinlandPop = describePopulation('Finland', 6)

// console.log('A4 => ', descPortugalPop, descGermanyPop, descFinlandPop)
