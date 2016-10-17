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

			//each product gets it own ProductCategoryRow and Product row
			products.forEach((product) => {
	      if (product.category !== currentCategory) {
          currentCategory = product.category;

	        rows.push((
            <ProductCategoryRow key={currentCategory} category={currentCategory} />
          ));
	      }
	      rows.push((
					<ProductRow name={product.name} product={product} />
				));
			});
			return (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			)
		}
})

export const ProductCategoryRow = React.createClass({
		render() {
				return (
					<tr><b>{this.props.category}</b></tr>
				)
		}
})

export const ProductRow = React.createClass({
		render() {
				return (
					<tr>Product: {this.props.product.name} | Price: {this.props.product.price}</tr>
				)
		}
})
