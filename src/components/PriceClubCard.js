import React from "react";
import SVGIcon from "./Sprite";

export default function PriceClubCard({
	priceGold,
	priceGoldAlt,
	amount,
	unitRatioAlt,
	isAltUnitActive
}) {
	if (!amount) {
		amount = 1;
	}

	const finalClubPrice = !isAltUnitActive
		? (priceGold * amount).toFixed(2)
		: (priceGoldAlt * amount * unitRatioAlt).toFixed(2);

	return (
		<p className="product_price_club_card">
			<span className="product_price_club_card_text">
				По карте <br /> клуба <br />
			</span>
			<span className="goldPrice">{finalClubPrice}</span>
			<span className="rouble__i black__i">
				<SVGIcon
					name="rouble_black"
					width="20px"
					height="30px"
					viewBox="0 7 50 50"
				/>
			</span>
		</p>
	);
}
