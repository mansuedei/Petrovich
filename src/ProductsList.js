import React from "react";
import Product from "./Product";

export default function ProductsList({ products }) {
	return (
		<>
			<div id="products_section">
				<div className="products_page pg_0">
					{products.map(product => (
						<div key={`${product.productId}${product.priceRetail}`}>
							<Product product={product} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
