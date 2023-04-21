const addToDb = (id) => {
	// const shoppingCart = {};
	let shoppingCart;

	// Get the shopping Cart
	const storedCart = localStorage.getItem("shoppingCart");
	if (storedCart) {
		shoppingCart = JSON.parse(storedCart);
	} else {
		shoppingCart = {};
	}

	// Add to quantity
	const quantity = shoppingCart[id];
	if (quantity) {
		const newQuantity = quantity + 1;
		shoppingCart[id] = newQuantity;
	} else {
		shoppingCart[id] = 1;
	}
	localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
	// console.log("Remove From Fake DB", id);
	const storedCart = localStorage.getItem("shoppingCart");
	if (storedCart) {
		const shoppingCart = JSON.parse(storedCart);
		if (id in shoppingCart) {
			delete shoppingCart[id];
			localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
		}
	}
};

const deleteShoppingCart = (id) => {
	localStorage.removeItem("shoppingCart");
};
// const addToDb = (id) => {
// 	const quantity = localStorage.getItem(id);
// 	if (quantity) {
// 		console.log("Already Exists");
// 		const newQuantity = parseInt(quantity) + 1;
// 		localStorage.setItem(id, newQuantity);
// 	} else {
// 		console.log("New Added");
// 		localStorage.setItem(id, 1);
// 	}
// };

export { addToDb, removeFromDb, deleteShoppingCart };
