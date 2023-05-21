'use strict'

/* 
  // strict mode
  let hasDriversLicense = false
  const passTest = true

  // if (passTest) hasDriverLicense = true // with strict mode show the error
  if (passTest) hasDriversLicense = true
  if (hasDriversLicense) console.log('I can drive :D')

  // reserved words that strict mode shows
  // examples:
  const interface = 'Audio'
  const private = 534
  
  // functions
  
  function logger() {
    console.log('My name is Jonas')
  }
  // calling / running / invoking function
  logger()
  logger()
  logger()
  
  function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
  
    return juice
  }
  const applejuice = fruitProcessor(5, 0)
  console.log(applejuice)
  
  const appleOrangeJuice = fruitProcessor(2, 4)
  console.log(appleOrangeJuice)
  
  // function declaration
  function calcAge1(birthYear) {
    // const age = 2023 - birthYear
    // return age
    return 2023 - birthYear
  }
  const age1 = calcAge1(1983)
  
  // function expression
  // annonymous function => expression => produces values
  const calcAge2 = function (birthYear) {
    return 2023 - birthYear
  }
  const age2 = calcAge2(1983)
  console.log(age1, age2)
  
  //Arrays
  const friend1 = 'Michael'
  const friend2 = 'Steven'
  const friend3 = 'Peter'
  
  const friends = ['Michael', 'Steven', 'Peter']
  console.log(friends)
  
  const y = new Array(1991, 'Arthur', 2008, 2020)
  
  console.log(friends[0], friends[2])
  console.log(friends.length)
  console.log(friends[friends.length - 1])
  
  friends[2] = 'Jay'
  console.log(friends)
  
  const firstName = 'Jonas'
  const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
  console.log(jonas)
  console.log(jonas.length)
  
  // exercise
  const calcAge = function (birthYear) {
    return 2037 - birthYear
  }
  const years = [1990, 1967, 2002, 2010, 2018]
  // console.log(calcAge(years))
  const age1 = calcAge(years[0])
  const age2 = calcAge(years[1])
  const age3 = calcAge(years[years.length - 1])
  
  console.log(age1, age2, age3)
  const ages = [age1, age2, age3]
  console.log(ages)
  
  // array methods
  
  // add elements
  const friends = ['Michael', 'Steven', 'Peter']
  const newLength = friends.push('Jay')
  console.log(newLength)
  console.log(friends)
  
  friends.unshift('John')
  console.log(friends)
  
  // remove elements
  friends.pop() // last element
  const popped = friends.pop()
  console.log(popped)
  console.log(friends)
  
  friends.shift() // first element
  console.log(friends)
  
  console.log(friends.indexOf('Steven'))
  console.log(friends.indexOf('Bob'))
  
  friends.push(23)
  console.log(friends.includes('Steven')) // strict equality
  console.log(friends.includes(23))
  
  if (friends.includes('Steven')) {
    console.log('You have a friend...')
  }
  
  // objects
  const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
  ]
  
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
  }
  
  console.log(jonas)
  
  // dot. vs bracket notation
  console.log(jonas.lastName)
  console.log(jonas['lastName'])
  
  const nameKey = 'Name'
  console.log(jonas['first' + nameKey])
  console.log(jonas['last' + nameKey])
  
  const interestedIn = prompt(
    'What do you want to know about jonas? Choose between firstName, lastName, age, job and friends'
  )
  // console.log(jonas.interestedIn) // undefined
  
  if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
  } else {
    console.log(
      'Wrong request! Choose between firstName, lastName, age, job and friends'
    )
  }
  
  jonas.location = 'Portugal'
  jonas['twitter'] = '@jonasschmedtman'
  console.log(jonas)
  
  // challenge
  // "Jonas has 3 friends, and his best friend is called Michael"
  console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
  )
  
  // object methods
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
  
    // calcAge: function (birthYear) {
    //   return 2037 - birthYear
    // },
    // calcAge: function () {
    //   console.log(this)
    //   return 2037 - this.birthYear
    // },
    calcAge: function () {
      this.age = 2037 - this.birthYear
      return this.age
    },
    getSummary: function () {
      return `${
        this.firstName
      } is a ${this.calcAge()}-year old teacher, and he has ${
        this.hasDriversLicense ? 'a' : 'no'
      } driver's license`
    },
  }
  
  // console.log(jonas.calcAge(1991))
  // console.log(jonas['calcAge'](1991))
  // console.log(jonas.calcAge())
  // console.log(jonas.age)
  // console.log(jonas.age)
  // console.log(jonas.age)
  // console.log(jonas['calcAge']())
  
  // challenge write a method getSummary that returns a string
  // "Jonas is a 46-year old teacher, and he has a /no driver's license"
  console.log(jonas.getSummary())
  
  // loops
  // for loops keeps running while condition is TRUE
  for (let rep = 1; rep <= 10; rep++) {
    // console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
  }
  
  // loop through arrays
  const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
  ]
  let types = []
  for (let i = 0; i < jonasArray.length; i++) {
    console.log(typeof jonasArray[i], jonasArray[i])
    // types[i] = typeof jonasArray[i]
    // types.push(typeof jonasArray[i])
    types = [...types, typeof jonasArray[i]]
  }
  // console.log(types)
  
  const years = [1991, 2007, 1969, 2020]
  const ages = []
  
  for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
  }
  console.log(ages)
  
  // continue and break
  console.log('---- only strings ----')
  for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue
  
    console.log(typeof jonasArray[i], jonasArray[i])
  }
  
  console.log('---- break with number ----')
  for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break
  
    console.log(typeof jonasArray[i], jonasArray[i])
  }
  
  // looping backwards and loops inside loops
  const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
  ]
  
  for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i])
  }
  
  // looping lopps
  for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise: ${exercise}`)
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Lifting repetition ${rep} 🏋️‍♂️`)
    }
  }
  
  // while loop
  // for (let rep = 1; rep <= 10; rep++) {
  //   console.log(`Lifting repetition ${rep} 🏋️‍♂️`)
  // }
  
  let rep = 1
  while (rep <= 10) {
    // console.log(`WHILE: Lifting repetition ${rep} 🏋️‍♂️`)
    rep++
  }
  
  let dice = Math.trunc(Math.random() * 6) + 1
  
  while (dice !== 6) {
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log('Loop ended successfully')
  }
*/
