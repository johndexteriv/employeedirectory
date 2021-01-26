import React from "react";

const SearchForm = () => {
	return (
		<>
			<div>
				<form className="search">
					<div className="form-group">
						<br></br>
						<input
							// value={props.search}
							// onChange={props.handleInputChange}
							name="search"
							list="search"
							type="text"
							className="form-control"
							placeholder="Type in search term to begin"
							id="search"
						/>
						{/* <datalist id="breeds">
						{props.breeds.map((breed) => (
                            <option value={breed} key={breed} />
						))}
					</datalist> */}
					</div>
				</form>
			</div>
		</>
	);
};

export default SearchForm;
