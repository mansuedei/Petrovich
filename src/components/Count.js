import React from "react";
import SVGIcon from "./Sprite";

export default function Count({ setAmount, amount }) {
	function increment() {
		setAmount(amount + 1);
	}

	function decrement() {
		if (amount > 0) {
			setAmount(amount - 1);
		}
	}

	function setValue(e) {
		e.preventDefault();
		const value = Number(e.target.value);

		if (amount < 0) {
			setAmount(0);
		} else {
			setAmount(value);
		}
	}

	return (
		<div class="product__wrapper">
			<div class="product_count_wrapper">
				<div class="stepper">
					<input
						onChange={setValue}
						class="product__count stepper-input"
						type="text"
						value={amount}
					></input>
					<span onClick={increment} class="stepper-arrow up"></span>
					<span onClick={decrement} class="stepper-arrow down"></span>
				</div>
			</div>
			<span
				class="btn btn_cart"
				data-url="/cart/"
				data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192"
			>
				<SVGIcon
					className="ic ic_cart"
					name="cart"
					width="20px"
					height="20px"
					viewBox="0 0 20 20"
				/>
				<span class="ng-binding">В корзину</span>
			</span>
		</div>
	);
}