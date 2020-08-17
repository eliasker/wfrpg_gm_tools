/**
 * Generic utility function for filtering an array with given input
 * @params array {array} Initial array
 * @params filterInput {string} String that is compared to strings in array 
 * @returns filtered array containing strings from initial array that include filterInput
 */
function arrayFilter(array, filterInput) {
  return array.filter(str => str.toLowerCase().includes(filterInput.toLowerCase()))
}

export default arrayFilter