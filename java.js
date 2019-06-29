const first = () => {
	const greet = 'Hi';
	greet = 'hallo'
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();