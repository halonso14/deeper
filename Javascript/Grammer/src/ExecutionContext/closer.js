let exposedData = 0;

const normalCounter = function () {
	return ++exposedData;
};

console.log('normally data is exposed to maintain data.');
console.log(`normalCounter() === exposedData`, normalCounter() === exposedData);

const simpleCloserCounter = function () {
	let hiddenData = 0;
	const increase = function () {
		return ++hiddenData;
	};
	return increase;
};

const triggerSimpleCloserCounter = simpleCloserCounter();

console.log('with closer, data is not exposed and is maintained.');
console.log(
	`simpleCloserCounter.hiddenData === undefined`,
	simpleCloserCounter.hiddenData === undefined
);

class Counter {
	constructor() {
		this.exposedData = 0;
	}

	increase = function () {
		return ++this.exposedData;
	};

	decrease = function () {
		return --this.exposedData;
	};
}

function CloserCounter() {
	let hiddenData = 0;

	this.increase = function () {
		return ++hiddenData;
	};

	this.decrease = function () {
		return --hiddenData;
	};
}

const counter = new Counter();
console.log('normally member of class is exposed.');
console.log(
	`counter.increase() === counter.exposedData`,
	counter.increase() === counter.exposedData
);

const closerCounter = new CloserCounter();
console.log(closerCounter.increase());
console.log('with closer, data is not exposed and is maintained.');
console.log(
	`closerCounter.hiddenData === undefined`,
	simpleCloserCounter.hiddenData === undefined
);
