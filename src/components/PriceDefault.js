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

	return !isAltUnitActive ? (
		<p className="product_price_default">
			<span className="retailPrice">{(priceRetail * amount).toFixed(2)}</span>
			<span className="rouble__i black__i">
				<SVGIcon
					name="rouble_gray"
					width="20px"
					height="30px"
					viewBox="0 7 50 50"
				/>
			</span>
		</p>
	) : (
		<p className="product_price_default">
			<span className="retailPrice">
				{(priceRetailAlt * amount * unitRatioAlt).toFixed(2)}
			</span>
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

{
	/* <svg
	width="20px"
	height="30px"
	className=""
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 7 50 50"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<path
		fill="#a7a7a7 "
		d="M28.109,29.658c5.173,0.578,10.357-0.979,14.355-4.312c4.172-4.748,5.151-11.509,2.499-17.246c-0.847-1.953-2.2-3.644-3.92-4.899c-1.813-1.204-3.872-1.991-6.026-2.303c-2.464-0.37-4.955-0.534-7.447-0.49H9.05v23.272H3.562v5.781H9.05v5.977H3.562v5.781H9.05v8.378h6.467v-8.133h20.088v-5.781H15.517v-6.026H28.06H28.109z M15.566,6.386h12.543c2.019-0.074,4.04,0.074,6.026,0.441c1.673,0.442,3.132,1.467,4.116,2.891c1.062,1.539,1.611,3.373,1.568,5.242c0.138,2.473-0.832,4.879-2.646,6.565c-2.601,1.812-5.76,2.645-8.917,2.352H15.517V6.386H15.566z"
	></path>
</svg>; */
}
