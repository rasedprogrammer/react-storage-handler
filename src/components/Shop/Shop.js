import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakedb";

const Shop = (props) => {
	// console.log(props);
	const { name, price, id } = props.shoes;
	const addToCart = (id) => {
		addToDb(id);
		// localStorage.setItem(id, 1);
		// console.log("Card Added", id);
	};
	const removeFromCart = (id) => {
		// console.log("remove", id);
		removeFromDb(id);
	};

	// No-1 Way To  Create Or Call Handler Function Under Wood The Logic
	// const addToCartWrapper = () => addToCart(id);
	return (
		<div>
			{/* <h2>This is Shoping Card Component</h2> */}
			<h1>Buy This: {name}</h1>
			<p>Only For: {price}</p>
			<p>
				<small>ID Number: {id}</small>
			</p>
			{/* <button onClick={addToCartWrapper}>Add Cart</button> */}

			{/* No-2 Way To Create Or Call Handler Function Under Wood The Logic */}
			<button onClick={() => addToCart(id)}>Add Cart</button>
			<button onClick={() => removeFromCart(id)}>Remove Cart</button>
		</div>
	);
};

export default Shop;
