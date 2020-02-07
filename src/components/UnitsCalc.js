import React from "react";

export default function UnitsCalc({ unitRatioAlt, amount, unitList }) {
	if (!amount) {
		amount = 1;
	}
	return (
		<>
			<div className="list--unit-padd"></div>
			<div className="list--unit-desc">
				<div className="unit--info">
					<div className="unit--desc-i"></div>
					<div className="unit--desc-t">
						<p>
							<span className="ng-binding">Продается {unitList[0]}:</span>
							<span className="unit--infoInn">
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
