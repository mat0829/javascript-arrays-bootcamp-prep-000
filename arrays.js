var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return 3
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(array)
  return array
}

<<<<<<< HEAD
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
=======
function removeElementFromEndOfArray(array) {
  array.slice(array.length - 1)
>>>>>>> 4604a081e49532a96f6eebe540988db5804a60b8
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
<<<<<<< HEAD
}
=======
}

>>>>>>> 4604a081e49532a96f6eebe540988db5804a60b8
