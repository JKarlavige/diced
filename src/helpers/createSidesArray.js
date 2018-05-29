export default function createSidesArray(min, max) {
  let newArray = []
  while(min <= max) {
    newArray.push(min)
    min = min + 2
  }
  return newArray
}