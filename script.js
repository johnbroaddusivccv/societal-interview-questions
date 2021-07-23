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
