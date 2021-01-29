import React from "react";
import "./style.css";

const SearchForm = ({ handleInputChange }) => {
	return (
		<>
			<div className="container-fluid">
				<form className="search">
					<div className="form-group">
						<br></br>
						<input
							onChange={(e) => handleInputChange(e)}
							name="search"
							list="search"
							type="text"
							className="form-control"
							placeholder="Search by employee"
							id="search"
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default SearchForm;
