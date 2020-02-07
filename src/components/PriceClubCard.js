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

	return !isAltUnitActive ? (
		<p class="product_price_club_card">
			<span class="product_price_club_card_text">
				По карте <br /> клуба <br />
			</span>
			<span class="goldPrice">{(priceGold * amount).toFixed(2)}</span>
			<span class="rouble__i black__i">
				<SVGIcon
					name="rouble_black"
					width="20px"
					height="30px"
					viewBox="0 7 50 50"
				/>
			</span>
		</p>
	) : (
		<p class="product_price_club_card">
			<span class="product_price_club_card_text">
				По карте <br /> клуба <br />
			</span>
			<span class="goldPrice">
				{(priceGoldAlt * amount * unitRatioAlt).toFixed(2)}
			</span>
			<span class="rouble__i black__i">
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
