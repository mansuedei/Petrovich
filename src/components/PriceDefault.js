import React from "react";
import SVGIcon from "./Sprite";

export default function PriceDefault({
	priceRetail,
	priceRetailAlt,
	amount,
	unitRatioAlt,
	isAltUnitActive
}) {
	if (!amount) {
		amount = 1;
	}

	const finalRetailPrice = !isAltUnitActive
		? (priceRetail * amount).toFixed(2)
		: (priceRetailAlt * amount * unitRatioAlt).toFixed(2);

	return (
		<p className="product_price_default">
			<span className="retailPrice">{finalRetailPrice}</span>
			<span className="rouble__i black__i">
				<SVGIcon
					name="rouble_gray"
					width="20px"
					height="30px"
					viewBox="0 7 50 50"
				/>
			</span>
		</p>
	);
}
