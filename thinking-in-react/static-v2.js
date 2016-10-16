import React from 'react'

export const FilterableProductTable = React.createClass({
    render() {
        return (
            <div>
            	<SearchBar/>
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
