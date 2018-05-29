export default function createChuck(array) {
	let arrays = []
	let chunk = 3
	while(array.length > 0)
		arrays.push(array.splice(0, chunk))
	return arrays
}