import React from 'react';
import { ProductInfo, ProductItem } from '../components';
import { useGetProducts } from '../hooks';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=9&offset=12'


export const ProductList = () => {

	const products = useGetProducts(API)

	return (
		<section className="main-container">
			<div className="ProductList">
				{
					products.map(product=>(
						<ProductItem product={ product } key={ product.id }/>
					))
				}
			</div>
		</section>
	);
}
