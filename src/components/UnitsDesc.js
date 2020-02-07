import React from "react";

export default function UnitsDesc({ unitList, activeUnit, setUnit }) {
	return (
		<div class="product_units">
			<div class="unit--wrapper">
				{unitList.map((unit, index) => (
					<div
						key={`${unit}${index}`}
						class={`unit--select ${unit === activeUnit ? "unit--active" : ""}`}
						onClick={() => {
							setUnit(unit);
						}}
					>
						<p class="ng-binding">За {unit}</p>
					</div>
				))}
			</div>
		</div>
	);
}

// <div class="unit--select unit--active">
//     <p class="ng-binding">За м. кв.</p>
// </div>
// <div class="unit--select">
//     <p class="ng-binding">За упаковку</p>
// </div>
