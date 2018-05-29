export default function createArray(min, max) {
  let newArray = []
  while(min <= max) {
    newArray.push(min)
    min++
  }
  return newArray
}