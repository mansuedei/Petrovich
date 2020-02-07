import React from "react";

export default function PricePoints({ priceRetail }) {
	const fixedPoints = (priceRetail * 0.6).toFixed(2);
	return (
		<div className="product_price_points">
			<p className="ng-binding">Можно купить за {fixedPoints} балла</p>
		</div>
	);
}
