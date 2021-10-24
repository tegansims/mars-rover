const moveRover = require("./moveRover")

const start = (gridSize, robotInstructions) => {
  robotInstructions.forEach(robot => console.log(moveRover(gridSize, robot)))
}

// start(
//   [4, 8],
//   [
//     [[2, 3, "E"], "LFRFF"], // => [[4, 4, "E"]]
//     [[0, 2, "N"], "FFLFRFF"] // => [[[0, 4, "W"], "LOST"]]
//   ]
// )
start(
  [4, 8],
  [
    [[2, 3, "N"], "FLLFR"], // => [[2, 3, "W"]]
    [[1, 0, "S"], "FFRLF"] // => [[[1, 0, "S"], "LOST"]]
  ]
)

module.exports = start
