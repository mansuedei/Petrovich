import React from "react";
import ProductsList from "./ProductsList";
import productData from "./products.json";
import "./styles/index.css";

function App() {
	// const products = productData;
	const products = productData;

	return (
		<>
			<main className="grid container">
				<div className="sub_category_page">
					<div className="column_right column_right_products_container">
						<div className="product__area">
							<ProductsList products={products} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
