import React, { useState } from 'react';
import '../styles/ProductItem.scss';
import addCart from '@icons/bt_add_to_cart.svg'

export const ProductItem = ({ product }) => {

	const [cart, setCart] = useState([])

	const handleClick = ( ) =>{ 
		setCart([])
	 }


	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={ handleClick }>
					<img src={ addCart } alt="addToCart" />
				</figure>
			</div>
		</div>
	);
}
