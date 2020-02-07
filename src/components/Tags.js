import React from "react";

function stringSplitter(string) {
	return string.split(";\n");
}

export default function Tags({ assocProducts }) {
	const youMayNeed = "Могут понадобиться:";
	const tags = stringSplitter(assocProducts);
	return (
		<div class="product_tags hidden-sm">
			<p>{youMayNeed + " "} </p>
			{tags.map((tag, index, array) => {
				if (index < array.length - 1) {
					return (
						<a key={`${tag}${index}`} href="#" class="url--link">
							{tag + ", "}
						</a>
					);
				} else {
					return (
						<a key={`${tag}${index}`} href="#" class="url--link">
							{tag.replace(";", ".")}
						</a>
					);
				}
			})}
		</div>
	);
}
