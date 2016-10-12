import React from 'react'

export const FilterableProductTable = React.createClass({
		render() {
				return (
						<div>
							<SearchBar/>
							<ProductTable/>
						</div>
				)
		}
})

export const SearchBar = React.createClass({
	render() {
		return (
			<div>Im a searchbar</div>
		)
	}
})

export const ProductTable = React.createClass({
		render() {
				return (
					<div>
							<h1>product table</h1>
							<ProductCategoryRow/>
							<ProductCategoryRow/>
					</div>
				)
		}
})

export const ProductCategoryRow = React.createClass({
		render() {
				return (
					<table>
						<ProductRow product='something'></ProductRow>
						<ProductRow product='somethingElse'></ProductRow>
					</table>
				)
		}
})

export const ProductRow = React.createClass({
		render() {
				return (
					<tr>{this.props.product}</tr>
					// <tr>{this.props.}</tr>
				)
		}
})
