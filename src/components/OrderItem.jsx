import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import closeXs from '@icons/icon_close.png'
import { AppContext } from '../context/AppContext';

export const OrderItem = ({ product }) => {


	const { deleteToCart } = useContext(AppContext)

	const handleRemove =()=>{
		deleteToCart(product)
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={ product.images[0] } alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img onClick={()=>handleRemove(product)} src={ closeXs } alt="close" />
		</div>
	);
}