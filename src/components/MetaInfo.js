import React from "react";

export default function MetaInfo({ code, isActive }) {
	return (
		<>
			<span className="product_code">Код: {code}</span>
			<div className="product_status_tooltip_container">
				<span className="product_status">
					{isActive ? "Наличие" : "Нет в наличии"}
				</span>
			</div>
		</>
	);
}
