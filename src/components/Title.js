import React from "react";

export default function ProductTitle({ title }) {
	return (
		<div className="product_description">
			<a href="#" className="product__link">
				{title}
			</a>
		</div>
	);
}
