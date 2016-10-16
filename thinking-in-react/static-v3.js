import React from 'react'

export const FilterableProductTable = React.createClass({
		render() {
			var products = this.props.products;

				return (
					<div>
						<SearchBar/>
						<ProductTable products={products}/>
					</div>
				)
		}
})

export const SearchBar = React.createClass({
	render() {
		return (
			<form>
				<input type='search' placeholder='search...'></input>
				<label>
				<input type='checkbox'></input>
					only show products in stock
				</label>
			</form>
		)
	}
})

export const ProductTable = React.createClass({
		render() {
			const products = this.props.products;
			const rows = [];
			let currentCategory;

			products.forEach((product) => {
			})
			return (

			)
		}
})

export const ProductCategoryRow = React.createClass({
		render() {
				return (
					<table>

					</table>
				)
		}
})

export const ProductRow = React.createClass({
		render() {
				return (
					<tr>{this.props.product} : {this.props.price}</tr>
				)
		}
})
