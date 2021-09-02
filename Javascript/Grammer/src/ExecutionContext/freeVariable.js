function OutterFunction() {
	let freeVariableForInnerFunction = 'free';
	console.log(
		'freeVariableForInnerFunction will be forgotten -',
		freeVariableForInnerFunction
	);
	const innerFunction = function () {
		freeVariableForInnerFunction += ' variable';
		return freeVariableForInnerFunction;
	};
	return innerFunction;
}

const unknownFunction = OutterFunction();

console.log(
	'freeVariableForInnerFunction has been removed from Global Context',
	OutterFunction.freeVariableForInnerFunction
);

console.log('unknwonFunction remembers freeVarialbe -', unknownFunction());
