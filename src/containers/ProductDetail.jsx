import React from 'react';
import { ProductInfo } from '../components';
import '../styles/ProductDetail.scss';

import closeIcon from '@icons/icon_close.png'

export const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={ closeIcon } alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}
