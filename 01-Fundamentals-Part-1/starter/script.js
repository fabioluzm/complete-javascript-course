/* 
  // lecture 1
  let js = 'amazing'
  if (js === 'amazing') alert('JavaScript is FUN')

  // literal values
  console.log(40 + 8 + 23 - 10)
  console.log('Jonas')
  console.log(23)

  // variable declaration
  let firstName = 'Matilda'
  console.log(firstName)
  console.log(firstName)
  console.log(firstName)

  // naming convention
  // correct way
  let myFirstJob = 'Programmer'
  let myCurrentJob = 'Teacher'

  // wrong way
  let job1 = 'Programmer'
  let job2 = 'Teacher'

  console.log(myFirstJob)
  
  // lecture 2
  // boolean values
  true
  let javascriptIsFun = true
  console.log(javascriptIsFun)

  // value types
  console.log(typeof true)
  console.log(typeof javascriptIsFun)
  console.log(typeof 23)
  console.log(typeof 'Jonas')
  let foo
  console.log(foo)
  console.log(typeof foo) // undefined is both value and type

  let foo2 = null
  console.log(foo2)
  console.log(typeof foo2)
  // dynamic typing
  javascriptIsFun = 'Yes!'
  console.log(typeof javascriptIsFun)
  
  // Basic Operators
  // Math operators
  const now = 2037;
  const ageJonas = now - 1991;
  const ageSarah = now - 2018;
  console.log(ageJonas, ageSarah);
  
  console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
  // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
  
  const firstName = 'Jonas';
  const lastName = 'Schmedtmann';
  console.log(firstName + ' ' + lastName);
  
  // Assignment operators
  let x = 10 + 5; // 15
  x += 10; // x = x + 10 = 25
  x *= 4; // x = x * 4 = 100
  x++; // x = x + 1
  x--;
  x--;
  console.log(x);
  
  // Comparison operators
  console.log(ageJonas > ageSarah); // >, <, >=, <=
  console.log(ageSarah >= 18);
  
  const isFullAge = ageSarah >= 18;
  
  console.log(now - 1991 > now - 2018);

  // Operator Precedence
  const now = 2037
  const ageJonas = now - 1991
  const ageSarah = now - 2018
  
  console.log(now - 1991 > now - 2018)
  
  // left-to-right operation
  // console.log(25 - 10 - 5)
  
  // right-to-left operation
  let x, y
  x = y = 25 - 10 - 5 // x = y = 10
  console.log(x, y)
  
  const averageAge = (ageJonas + ageSarah) / 2
  console.log(ageJonas, ageSarah, averageAge)
  
  // strings and template literals
  const firstName = 'Jonas'
  const job = 'teacher'
  const birthYear = 1991
  const year = 2037
  
  // const jonas =
  //   "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
  const jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
  
  console.log(jonas)
  console.log(`Just a regular string...`)
  console.log(
    'String with \n\
  multiple \n\
  lines'
  )  
  console.log(`String
  multiple
  lines`)
  
  // taking decisions: if, else statements (control structure)
  const age = 15
  // const isOldEnough = age >= 18
  
  if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
  } else {
    const yearsLeft = 18 - age
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`)
  }
  
  const birthYear = 1991
  let century
  if (birthYear <= 2000) {
    century = 20
  } else {
    century = 21
  }
  console.log(century)
  
  // type conversion
  const inputYear = '1991'
  console.log(Number(inputYear), inputYear)
  console.log(Number(inputYear) + 18)
  
  console.log(Number('Jonas'))
  console.log(typeof NaN)
  
  console.log(String(23), 23)
  
  // type coersion
  console.log('I am ' + 23 + ' years old') // + converts to string
  console.log('23' - '10' - 3) // - converts to number
  console.log('23' * '2') // * converts to number
  console.log('23' / '2') // / converts to number
  
  let n = '1' + 1 // '11'
  n = n - 1 // '11' - 1
  console.log(n) // 10
  
  let n2 = 2 + 3 + 4 + '5' // 9 + '5'
  console.log(n2) // '95'
  
  let n3 = '10' - '4' - '3' - 2 + '5' // 1 + '5'
  console.log(n3) // '15'
  
  // 5 falsy values: 0, '', undefined, null, NaN
  console.log(Boolean(0)) // false
  console.log(Boolean(undefined)) // false
  console.log(Boolean('Jonas')) // true
  console.log(Boolean({})) // true
  console.log(Boolean('')) // false
  
  const money = 0
  let msg
  
  if (money) {
    msg = "Don't spend it all ;)"
  } else {
    msg = 'You should get a job!'
  }
  console.log(msg)
  
  let height = 0
  if (height) {
    msg = 'YAY! Height is defined!'
  } else {
    msg = 'Height is UNDEFINED!'
  }
  console.log(msg)
  
  // Equality Operators
  const age = 18
  
  // strict equality operator (doesn't do type coersion)
  if (age === 18) console.log('You just became an adult :D (strict)')
  
  // loose equality operator (does type coersion)
  if (age == '18') console.log('You just became an adult :D (loose)')
  
  const favourite = Number(prompt("What's your favorite number?"))
  console.log(favourite, typeof favourite)
  
  if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
  } else if (favourite === 7) {
    console.log('7 is also a cool amazing number!')
  } else if (favourite === 9) {
    console.log('9 is also a cool amazing number!')
  } else {
    console.log('Number is not 23 or 7 or 9!')
  }
  
  if (favourite !== 23) console.log('Why not 23?')
  
  // Boolean Logic and, or & not operators
  const hasDriversLicence = true // A
  const hasGoodVision = true // B
  
  console.log(hasDriversLicence && hasGoodVision) // and
  console.log(hasDriversLicence || hasGoodVision) // or
  console.log(!hasDriversLicence) // not
  
  // const shouldDrive = hasDriversLicence && hasGoodVision
  
  // if (hasDriversLicence && hasGoodVision) {
  //   console.log('Sarah is able to drive!')
  // } else {
  //   console.log('Someone else should drive...')
  // }
  
  const isTired = true // C
  console.log(hasDriversLicence && hasGoodVision && isTired)
  
  // improve decision making
  if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
  } else {
    console.log('Someone else should drive...')
  }
  
  // switch statement
  const day = 'saturday'
  let switchMsg = ''
  let switchMsg2 = ''
  switch (day) {
    case 'monday':
      switchMsg = 'Plan course structure'
      switchMsg2 = 'Go to coding meetup'
      break
    case 'tuesday':
      switchMsg = 'Prepare theory videos'
      break
    case 'wednesday': // 2 cases for same code
    case 'thursday': // 2 cases for same code
      switchMsg = 'Write code examples'
      break
    case 'friday':
      switchMsg = 'Record videos'
      break
    case 'saturday': // 2 cases for same code
    case 'sunday': // 2 cases for same code
      switchMsg = 'Enjoy the weekend'
      break
    default:
      switchMsg = 'Not a valid day'
      break
  }
  
  // lecture challenge
  if (day === 'monday') {
    switchMsg = 'Plan course structure'
    switchMsg2 = 'Go to coding meetup'
  } else if (day === 'tuesday') {
    switchMsg = 'Prepare theory videos'
  } else if (day === 'wednesday' || day === 'thursday') {
    switchMsg = 'Write code examples'
  } else if (day === 'friday') {
    switchMsg = 'Record videos'
  } else if (day === 'saturday' || day === 'sunday') {
    switchMsg = 'Enjoy the weekend'
  } else {
    switchMsg = 'Not a valid day'
  }
  
  console.log(switchMsg)
  console.log(switchMsg2)
  
  // conditional operator (ternary)
  const age = 23
  // age >= 18
  //   ? console.log('I like to drink wine')
  //   : console.log('I like do drink water')
  // condition ? if : else
  
  const drink = age >= 18 ? 'wine' : 'water' // it's an expression that produces a value
  console.log(drink)
  
  let drink2
  if (age >= 18) {
    drink2 = 'wine'
  } else {
    drink2 = 'water'
  }
  console.log(drink2)
  
  // ternary operator can be used inside a template literal
  console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/
