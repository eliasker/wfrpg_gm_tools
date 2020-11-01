/**
 * Generic utility function for filtering an array with given input
 * @params array {array} Initial array
 * @params filterInput {string} String that is compared to strings in array 
 * @returns filtered array containing strings from initial array that include filterInput
 */
export function arrayFilter(array, filterInput) {
  return array.filter(str => str.toLowerCase().includes(filterInput.toLowerCase()))
}


export function replaceItemAtIndex(array, index, newValue) {
  return [...array.slice(0, index), newValue, ...array.slice(index + 1)]
}
