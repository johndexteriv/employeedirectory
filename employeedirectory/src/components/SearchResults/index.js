import React from "react";
import { Table } from "reactstrap";
import "./style.css";

const SearchResults = (props) => {
	return (
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
				<tr>
					<td>IMG HERE</td>
					<td>Mark Otto</td>
					<td>{`(555)555-5555`}</td>
					<td>markotto@gmail.com</td>
					<td>11-06-1983</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default SearchResults;

// const SearchResults = ({ props }) => {
// 	console.log(props);

// 	return (
// 		<div>
// 			<ul className="list-group search-results">
// 				{employees.map((person) => (
// 					<>
// 						<li key={person.id.value}>{person.picture.thumbnail}</li>
// 						<li>{person.name.first}</li>
// 						<li>{person.cell}</li>
// 						<li>{person.email}</li>
// 						<li>{person.dob.date}</li>
// 					</>
// 				))}
// 			</ul>

// 		</div>
// 	);
// };

// export default SearchResults;
