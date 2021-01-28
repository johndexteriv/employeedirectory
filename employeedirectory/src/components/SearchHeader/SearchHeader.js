import React from "react";
import "./style.css";

const SearchResults = (props) => {
	// console.log(props);
	return (
		<div>
			<div className="search-header">
				<ul>
					<li>Image</li>
					<li className="name">Name</li>
					<li>Phone</li>
					<li>Email</li>
					<li>DOB</li>
				</ul>
			</div>
		</div>
	);
};

export default SearchResults;
