const moveRover = require("./moveRover.js")

const MOCKINPUT1 = [
  [4, 8],
  [[2, 3, "E"], "LFRFF"]
]
const MOCKINPUT2 = [
  [4, 8],
  [[0, 2, "N"], "FFLFRFF"]
]
const MOCKINPUT3 = [
  [4, 8],
  [[2, 3, "N"], "FLLFR"]
]
const MOCKINPUT4 = [
  [4, 8],
  [[1, 0, "S"], "FFRLF"]
]

const MOCKANSWER1 = [4, 4, "E"]
const MOCKANSWER2 = [[0, 4, "W"], "LOST"]
const MOCKANSWER3 = [2, 3, "W"]
const MOCKANSWER4 = [[1, 0, "S"], "LOST"]

describe("Tests moving one rover", () => {
  let result
  it("Returns the expected answer with params 1", () => {
    result = moveRover(...MOCKINPUT1)
    expect(JSON.stringify(result)).toEqual(JSON.stringify(MOCKANSWER1))
  })
  it("Returns the expected answer with params 2", () => {
    result = moveRover(...MOCKINPUT2)
    expect(JSON.stringify(result)).toEqual(JSON.stringify(MOCKANSWER2))
  })
  it("Returns the expected answer with params 3", () => {
    result = moveRover(...MOCKINPUT3)
    expect(JSON.stringify(result)).toEqual(JSON.stringify(MOCKANSWER3))
  })
  it("Returns the expected answer with params 4", () => {
    result = moveRover(...MOCKINPUT4)
    expect(JSON.stringify(result)).toEqual(JSON.stringify(MOCKANSWER4))
  })
})
