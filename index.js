let length = { x: 5, y: 5 }; // length and hight for the array.

let dots = []; // the array where we will be keeping the different dots, in the future i will be also adding a previouse dot into it so that it can connect to form a line.
for (let x = 0; x < length.x; x++) {
	let otherArray = []; // the y array, we dont want one dimension.. or do we?
	for (let y = 0; y < length.y; y++) {
		otherArray[y] = { x: x, y: y, active: false };
	}
	dots[x] = otherArray; // add the y array to the x array.
}
console.log(dots);
