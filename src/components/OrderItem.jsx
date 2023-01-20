import React from 'react';
import '../styles/OrderItem.scss';
import closeXs from '@icons/icon_close.png'

export const OrderItem = ({ product }) => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={ product.images[0] } alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={ closeXs } alt="close" />
		</div>
	);
}