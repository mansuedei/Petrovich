import React, { useState } from "react";
import ProductsList from "./ProductsList";
import productData from "./products.json";

function App() {
	// const products = productData;
	const products = [productData[0], productData[1], productData[2]];

	return (
		<>
			<main class="grid container">
				<div class="sub_category_page">
					<div class="column_right column_right_products_container">
						<div class="product__area">
							<ProductsList products={products} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;

function getProduct() {
	return {
		productId: "8b051a82-e051-11e4-afe5-00259036a192",
		code: "00000142709",
		title:
			"Плитка облицовочная Сан-Ремо 7 200х200х7 мм белая (26 шт=1.04 кв.м)",
		description:
			"Предназначена для облицовки стен внутри жилых (кухня, ванная комната, туалет и пр.) и коммерческих (магазины, кафе, отели и пр.) помещений.\n\nТон (оттенок) может отличаться от партии к партии.\n\nСостав: огнеупорная глина, пылевой шпат, кварцевый песок, каолин, красители, фритта.\n\nСтепень блеска: глянцевый.\nКоличество на поддоне: 96 коробок.\nПроизводитель: ОАО «Керамин», Беларусь.\n\nСопутствующие: клей для плитки, крестики, затирка для швов, плиткорез.\n",
		primaryImageUrl:
			"//tdp.ru/images/p/cd9/3ef76-fbad-11e4-afe5-00259036a192.jpg",
		assocProducts: "клей для плитки;\nкрестики;\nзатирка для швов;\nплиткорез;",
		weight: 13600,
		unit: "упак.",
		unitFull: "упаковка",
		unitRatio: 1,
		unitAlt: "м. кв.",
		unitRatioAlt: 0.9615,
		unitFullAlt: "метр квадратный",
		priceRetail: 593,
		priceRetailAlt: 570.1695,
		priceGold: 576,
		priceGoldAlt: 553.824,
		bonusAmount: 0,
		hasAlternateUnit: true,
		isActive: true,
		modified: "2016-10-27 09:58:16"
	};
}
