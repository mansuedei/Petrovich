import React from "react";

export default function MetaInfo({ code, isActive }) {
	return (
		<>
			<span class="product_code">Код: {code}</span>
			<div class="product_status_tooltip_container">
				<span class="product_status">
					{isActive ? "Наличие" : "Нет в наличии"}
				</span>
			</div>
		</>
	);
}
