const updateOrientation = (initial, instruction) => {
  let options = ["N", "E", "S", "W"]
  let orientationIndex = options.indexOf(initial.toUpperCase())

  if (orientationIndex === -1) throw Error("invalid starting orientation given")

  if (instruction === "L") orientationIndex--
  if (instruction === "R") orientationIndex++
  
  if (orientationIndex === -1) return options[3]
  return options[orientationIndex % 4]
}

const updateCoords = (coords, orientation) => {
  if (orientation === "N") coords[1]++
  if (orientation === "E") coords[0]++
  if (orientation === "S") coords[1]--
  if (orientation === "W") coords[0]--

  return coords
}

const checkIsOffGrid = (gridSize, coords) => {
  return (
    coords[0] > gridSize[0] ||
    coords[1] > gridSize[1] ||
    coords[0] < 0 ||
    coords[1] < 0
  )
}

const moveRover = (gridSize, robot) => {
  let coords = [robot[0][0], robot[0][1]]
  let orientation = robot[0][2]
  let isOffGrid = false
  const instructions = robot[1].split("")

  for (let i = 0; i < instructions.length && !isOffGrid; i++) {
    if (instructions[i] === "L" || instructions[i] === "R") {
      orientation = updateOrientation(orientation, instructions[i])
    }
    if (instructions[i] === "F") {
      let tempCoords = [...coords]
      tempCoords = updateCoords(tempCoords, orientation)
      isOffGrid = checkIsOffGrid(gridSize, tempCoords)
      if (!isOffGrid) coords = tempCoords
      else return [[...coords, ...orientation], "LOST"]
    }
  }
  
  return [...coords, ...orientation]
}

module.exports = moveRover
