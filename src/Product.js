import React, { useState } from "react";
import MetaInfo from "./components/MetaInfo";
import Photo from "./components/Photo";
import Title from "./components/Title";
import Tags from "./components/Tags";
import UnitsDesc from "./components/UnitsDesc";
import PriceClubCard from "./components/PriceClubCard";
import PriceDefault from "./components/PriceDefault";
import PricePoints from "./components/PricePoints";
import UnitsCalc from "./components/UnitsCalc";
import Count from "./components/Count";

export default function Product({ product }) {
	const hasOnlyOneUnit = product.unit === product.unitAlt;
	const unitList = hasOnlyOneUnit
		? [product.unit]
		: [product.unit, product.unitAlt];

	const [amount, setAmount] = useState(0);
	const [activeUnit, setUnit] = useState(unitList[0]);
	const isAltUnitActive = unitList.indexOf(activeUnit);
	return (
		<div class="product product_horizontal">
			<MetaInfo code={product.code} isActive={product.isActive} />
			<Photo primaryImageUrl={product.primaryImageUrl} />
			<Title title={product.title} />
			<Tags assocProducts={product.assocProducts} />
			<UnitsDesc
				activeUnit={activeUnit}
				unitList={unitList}
				setUnit={setUnit}
			/>
			<PriceClubCard
				priceGold={product.priceGold}
				priceGoldAlt={product.priceGoldAlt}
				amount={amount}
				unitRatioAlt={product.unitRatioAlt}
				isAltUnitActive={isAltUnitActive}
			/>
			<PriceDefault
				priceRetail={product.priceRetail}
				priceRetailAlt={product.priceRetailAlt}
				amount={amount}
				unitRatioAlt={product.unitRatioAlt}
				isAltUnitActive={isAltUnitActive}
			/>
			<PricePoints priceRetail={product.priceRetail} />
			{!hasOnlyOneUnit && (
				<UnitsCalc
					unitRatioAlt={product.unitRatioAlt}
					amount={amount}
					unitList={unitList}
				/>
			)}
			<Count setAmount={setAmount} amount={amount} />
		</div>
	);
}
