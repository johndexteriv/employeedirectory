import React from "react";
import "./style.css";

const SearchResults = () => {
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
			<ul className="list-group search-results"></ul>
		</div>
	);
};

export default SearchResults;
