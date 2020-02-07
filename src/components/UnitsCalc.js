import React from "react";

export default function UnitsCalc({ unitRatioAlt, amount, unitList }) {
	if (!amount) {
		amount = 1;
	}
	return (
		<>
			<div class="list--unit-padd"></div>
			<div class="list--unit-desc">
				<div class="unit--info">
					<div class="unit--desc-i"></div>
					<div class="unit--desc-t">
						<p>
							<span class="ng-binding">Продается {unitList[0]}:</span>
							<span class="unit--infoInn">
								{amount} {unitList[0]} = {(amount * unitRatioAlt).toFixed(2)}{" "}
								{unitList[1]}
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
