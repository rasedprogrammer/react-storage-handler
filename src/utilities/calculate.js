const add = (first, second) => {
	return first + second;
};

const multiply = (first, second) => {
	return first * second;
};

// const numbers = [23, 42, 535, 54, 646, 77, 575, 7, 44, 345];

// const sumNumber = (previousValue, currentValue) => previousValue + currentValue;

// const totalNumber = numbers.reduce(sumNumber, 0);

const items = [
	{ name: "Rased", salary: "20000" },
	{ name: "Rased2", salary: "25000" },
	{ name: "Rased3", salary: "30000" },
];

// const itemsSum = (previous, current) => previous + current.salary;
// const totalItemsSum = items.reduce(itemsSum, 0);

const getTotalItemsSum = (products) => {
	const totalItems = (previous, current) => previous + current.salary;
	const total = products.reduce(totalItems, 0);
	return total;
};

// Single Export Methods
// export default add;

//Multiple Export Methods
export { add, multiply, getTotalItemsSum as getTotal };
