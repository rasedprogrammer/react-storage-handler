import React, { useEffect, useState } from "react";
// Multiple Way to Import
import { add, getTotal } from "../../utilities/calculate";
import Shop from "../Shop/Shop";
// import add from "../../../utilities/calculate";

const Shoes = () => {
	const first = 55;
	const second = 56;
	const total = add(first, second);

	const [shopProduct, setShopProduct] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((response) => response.json())
			.then((data) => setShopProduct(data));
	}, []);

	const getTotal5 = getTotal(shopProduct);

	return (
		<div>
			<h2>This is Shoes Component</h2>
			<p>Total: {getTotal5}</p>
			<p>The Total Sum: {total}</p>
			{shopProduct.map((shoes) => (
				<Shop key={shoes.id} shoes={shoes}></Shop>
			))}
		</div>
	);
};

export default Shoes;
