import React, { useContext } from 'react';
import { OrderItem } from '../components';
import '../styles/MyOrder.scss';

import backArrow from '@icons/flechita.svg'
import { AppContext } from '../context/AppContext';


export const MyOrder = () => {

	const { state } = useContext(AppContext)

	const sumTotal = ()=>{

		const reducer =(accumalator, currentValue)=> accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);

		return sum
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={ backArrow } alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					state.cart.map(product=>(

						<OrderItem product={product} key={`orderItem-${product.id}`}/>

					))
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${ sumTotal() }</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}
