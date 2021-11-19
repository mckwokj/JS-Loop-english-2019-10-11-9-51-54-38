function multiplicationTable () {
	for (let i=1; i<10; i++) {
		const outputLine = []
		for (let j=1; j<=i; j++) {
			outputLine.push(`${i}*${j}=${i*j}`)
		}
		console.log(outputLine.join(" "))
	}
}

multiplicationTable()