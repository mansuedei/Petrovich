import React from "react";

export default function UnitsDesc({ unitList, activeUnit, setUnit }) {
	return (
		<div className="product_units">
			<div className="unit--wrapper">
				{unitList.map((unit, index) => (
					<div
						key={`${unit}${index}`}
						className={`unit--select ${unit === activeUnit ? "unit--active" : ""}`}
						onClick={() => {
							setUnit(unit);
						}}
					>
						<p className="ng-binding">За {unit}</p>
					</div>
				))}
			</div>
		</div>
	);
}

// <div className="unit--select unit--active">
//     <p className="ng-binding">За м. кв.</p>
// </div>
// <div className="unit--select">
//     <p className="ng-binding">За упаковку</p>
// </div>
