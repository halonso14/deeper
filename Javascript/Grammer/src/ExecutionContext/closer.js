function Counter() {
	let counter = 0;

	this.increase = function () {
		return ++counter;
	};

	this.decrease = function () {
		return --counter;
	};
}

const counter = new Counter();
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
