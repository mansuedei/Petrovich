import React from "react";

export default function PricePoints({ priceRetail }) {
	const fixedPoints = (priceRetail * 0.6).toFixed(2);
	return (
		<div class="product_price_points">
			<p class="ng-binding">Можно купить за {fixedPoints} балла</p>
		</div>
	);
}
