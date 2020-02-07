import React from "react";

export default function ProductTitle({ title }) {
	return (
		<div class="product_description">
			<a href="#" class="product__link">
				{title}
			</a>
		</div>
	);
}
