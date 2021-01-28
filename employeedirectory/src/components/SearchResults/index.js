import React from "react";
import "./style.css";

const SearchResults = (props) => {
	// console.log(props);
	return (
		<div>
			{/* <div className="search-header">
				<ul>
					<li>Image</li>
					<li className="name">Name</li>
					<li>Phone</li>
					<li>Email</li>
					<li>DOB</li>
				</ul>
			</div> */}
			{/* <ul className="list-group search-results">
				{props.employees.map((person) => (
					<>
						<li key={person.id.value}>{person.picture.thumbnail}</li>
						<li>{person.name.first}</li>
						<li>{person.cell}</li>
						<li>{person.email}</li>
						<li>{person.dob.date}</li>
					</>
				))}
			</ul> */}
		</div>
	);
};

export default SearchResults;
