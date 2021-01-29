import React from "react";
import { Table } from "reactstrap";
import "./style.css";

const SearchResults = ({ employees }) => {
	console.log("employeeeeeees", employees);

	return (
		<>
			<Table striped>
				<thead>
					<tr>
						<th>Image</th>
						<th className="dropdown-toggle" data-toggle="dropdown">
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
						<></>
					)}
				</tbody>
			</Table>
		</>
	);
};

export default SearchResults;
