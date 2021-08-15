// Talk while walking through the problem
// Companies want someone who can solve problems and be personable

// Appending string # to create a pyramid
let txt = ''
for (let i = 0; i <= 7; i++) {
  console.log((txt += '#'))
}

// =================================================================
// output
// #
// ##
// ###
// ####
// #####
// ######
// #######
// =================================================================

// FizzBuzz

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let fizzy = i
    if (fizzy % 3 == 0 && fizzy % 5 == 0) {
      console.log((fizzy += ' fizzbuzz'))
    } else if (fizzy % 3 !== 0 && fizzy % 5 !== 0) {
      console.log(fizzy)
    } else if (fizzy % 3 == 0) {
      console.log((fizzy += ' fizz'))
    } else if (fizzy % 5 == 0) {
      console.log((fizzy += ' buzz'))
    }
  }
}

fizzBuzz()
// =================================================================
// output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// ...
// =================================================================

// chessboard
// two dimensions needs for loops nested within eachother

let size = 8

let board = ''

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((j + i) % 2 == 0) {
      board += ' '
    } else {
      board += '#'
    }
  }
  board += '\n'
}

console.log(board)

// =================================================================
// output
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// =================================================================

// min function
// Write a function min that takes in two arguments and then returns their minimum
function min(a, b) {
  return Math.min(a, b)
}

console.log(min(18, 11))

// =================================================================
// output
//  11
// =================================================================

// Recursion
// Zero is even, one is odd, for any other number n, its evenness is the same as n-2
// Define a recursive function isEven corresponding to this description
// The function should accept a single parameter (a positive, whole number) and return a boolean.
// Test it on 50 and 75
// See how it behaves on -1
// Why? can you think of a way to fix this?

function isEvenFirst(n) {
  if (n == 0) {
    return true
  } else if (n == 1) {
    return false
  } else if (-n > 0) {
    return null
  } else {
    return isEvenFirst(n - 2)
  }
}

console.log(isEvenFirst(50), isEvenFirst(75), isEvenFirst(-1))

// =================================================================
// output
//  true false null
// =================================================================

function isEvenSecond(a) {
  if (a == 0) {
    return true
  } else {
    return -a % 2 == 0 ? true : false
  }
  return isEvenSecond(a - 2)
}

console.log(isEvenSecond(50), isEvenSecond(75), isEvenSecond(-1))

// =================================================================
// output
//  true false false
// =================================================================

// Bean Counting
// Write a function countsBs that takes a string as its only argument
// and returns a number that indicates how many uppcase "B" Characters there are in the string

// This is giving output of B found and There was no B found
function countBs(str) {
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == 'B') {
      console.log('B found')
    } else {
      console.log('there was no B found')
    }
  }
}

// This is giving output of zero

function countBs(str) {
  for (let i = 0; i <= str.length; i++) {
    if (str.indexOf('B') > -1) {
      return str[i]
    } else if (str.indexOf(str[i]) !== 'B') {
      return "No B's"
    }
  }
}

// This is giving output of where the B is located in the loop
function loopString(str) {
  for (let i = 0; i <= str.length; i++) {
    console.log(str[i])
    if (str[i] == 'B') {
      return (i += ' B')
    }
  }
}

// output 0
function loopString(str) {
  let counter = 0
  for (let i = 0; i <= str.length; i++) {
    console.log(str[i])
    let theB = 'B'
    if (str[i] == theB) {
      return theB.indexOf('B')
    }
  }
}

// Fixed the findB's function

function countBs(str) {
  let counter = 0
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == 'B') {
      counter++
    }
  }
  return counter
}

// Count B's short hand
function countDrac(string, ch) {
  let counted = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1
    }
  }
  return counted
}
function countBz(string) {
  return countDrac(string, 'B')
}

// countChar
function countChar(str, a) {
  let counter = 0
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == a) {
      counter++
    } else if (str == '') {
      return counter
    }
  }
  return counter
}
