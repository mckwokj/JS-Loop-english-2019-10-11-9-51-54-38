function determineOddEven () {
	for (let i=1; i<21; i++) {
		console.log(i % 2 === 0 ? `${i} is even number.` : `${i} is odd number.`)
	}
}

determineOddEven()