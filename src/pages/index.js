// // let array = [1, 2, 3, 4, 5]
// // // let array = []
// // let i = 0
// //
// // do {
// // 	!array.length && console.log('Array is empty')
// //
// // 	console.log(array[i])
// // 	++i
// // } while (i < array.length)
//
//
// // let i = 0
// // while (7 - i) {
// // 	console.log(i)
// // 	i++
// // }
//
// // for (let i = 0; 7 - i; i++) {
// // 	console.log(i)
// // }
//
// // const res = arr.map(el => {
// //
// // 	if (el % 2) {
// // 		return el
// // 	}
// //
// // })
//
// const arr = [{name: 'Ivan'}, {name: 'Denis'}, {name: 'Alex'}]
//
// const objName = arr.find(el => el.name === arr[1].name)
//
// objName.name = 'Dima'
//
// // console.log(arr) // [ { name: 'Ivan' }, { name: 'Dima' }, { name: 'Alex' } ]
//
// const fill = (size, value) => {
// 	const newArray = new Array(size)
//
// 	let i = 0
//
// 	while (i < size) {
// 		newArray.push('')
// 		i++
// 	}
//
// 	// console.log(newArray)
//
// 	return newArray.reduce(acc => {
// 		acc.push(value)
// 		return acc
// 	}, [])
// }
//
// const res = fill(3, 'a')
//
// // console.log(new Array(3))

// const reversey = (array) => {
// 	let newArr = array;
//
// 	let length = newArr.length
//
// 	for (let i = 0; i < length; i++) {
// 		console.log('перед', newArr);
//
// 		[newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
//
// 		console.log('после', newArr)
// 	}
// 	return null
// }
//
// const res2 = reversey([1, 2, 3, 4])
//
// let num = 4
//
// Number.isInteger(num)


// console.log(a)

let count = 0

let i = 5
while (i) {
	console.log(count = count + 1)
	i--
}
