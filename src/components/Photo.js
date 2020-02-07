import React from "react";

function buildPhotoLink(primaryImageUrl) {
	return primaryImageUrl.replace(".jpg", "_220x220_1.jpg");
}

export default function Photo({ primaryImageUrl }) {
	const PRODUCT_ID = buildPhotoLink(primaryImageUrl);
	return (
		<>
			<div class="product_photo">
				<a href="#" class="url--link product__link">
					<img src={PRODUCT_ID}></img>
				</a>
			</div>
		</>
	);
}
