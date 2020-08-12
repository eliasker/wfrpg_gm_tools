export const rollDie = sides => {
  return Math.floor(Math.random() * Math.floor(sides)) + 1
}

export const rollMultiple = (times, sides) => {
  var sum = 0
  for (var i = 0; i < times; i++) sum += rollDie(sides)
  return sum
}

// Returns value based on string str
// Such as '20+1d10' or '3d10'
export const parseRoll = str => {
  if (str.includes('+') && str.includes('d')) {
    try {
      var newStr = str.split('+')
      var sum = parseInt(newStr[0])
      var times = parseInt(newStr[1].split('d')[0])
      var sides = parseInt(newStr[1].split('d')[1])
      sum += rollMultiple(times, sides)
      return sum
    } catch (e) { return str }
  } else if (str.includes('d') && !str.includes('+')) {
    try {
      times = parseInt(str.split('d')[0])
      sides = parseInt(str.split('d')[1])
      if (isNaN(times) || isNaN(sides)) return str
      return rollMultiple(times, sides)
    } catch (e) { return str }
  }
  return str
}

export const successLevel = (stat, advantage) => {
  var diceRoll = rollDie(100)
  var successLevel = Math.floor(stat / 10) - Math.floor(diceRoll / 10)
  if (advantage) successLevel += advantage
  return successLevel
}