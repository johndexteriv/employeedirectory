import React from "react";
import { Table } from "reactstrap";
import "./style.css";

const SearchResults = ({ employees, handleInputChange, handleClick }) => {
	console.log("handling the click", handleClick);
	console.log("these are the employees", employees);

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
			<Table striped>
				<thead>
					<tr>
						<th>Image</th>
						<th
							className="dropdown-toggle"
							data-toggle="dropdown"
							onClick={(e) => handleClick(e)}
							value="true"
						>
							Name
							<span className="caret"></span>
						</th>
						<th>Phone</th>
						<th>Email</th>
						<th>DOB</th>
					</tr>
				</thead>
				<tbody>
					{employees[0] !== undefined && employees[0].name !== undefined ? (
						employees.map(({ name, login, picture, phone, email, dob }) => {
							return (
								<tr key={login.username}>
									<td>
										<img src={picture.medium} alt={login.username} />
									</td>
									<td>
										{name.first} {name.last}
									</td>
									<td>{phone}</td>
									<td>{email}</td>
									<td>{dob.date.slice(0, 10)}</td>
								</tr>
							);
						})
					) : (
						<div style={{ textAlign: "center" }}>
							<h1>Sorry no employee found</h1>
						</div>
					)}
				</tbody>
			</Table>
		</>
	);
};

export default SearchResults;
