import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

const SearchPage = () => {
	const [employees, setEmployees] = useState([]);
	const [filteredEmployees, setFilteredEmployees] = useState([]);
	const [click, setClick] = useState(true);

	useEffect(() => {
		API()
			.then((res) => {
				if (res.data.length === 0) {
					throw new Error("No results found.");
				}
				if (res.data.status === "error") {
					throw new Error(res.data.message);
				}
				setEmployees(res.data.results);
				setFilteredEmployees(res.data.results);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleInputChange = (event) => {
		event.preventDefault();
		const searchQuery = event.target.value;
		const searchQueryList = employees.filter((employee) => {
			let values = Object.values(employee).join("").toLowerCase();

			return values.indexOf(searchQuery.toLowerCase()) !== -1;
		});
		setFilteredEmployees(searchQueryList);
	};

	const handleClick = (event) => {
		event.preventDefault();

		if (click === true) {
			const descending = filteredEmployees
				.map((e) => e)
				.sort((a, b) => {
					var nameA = a.name.first.toLowerCase(),
						nameB = b.name.first.toLowerCase();
					if (nameA > nameB) return -1;
					if (nameA < nameB) return 1;
					return 0;
				});
			setClick(false);
			setFilteredEmployees(descending);
		} else {
			const ascending = filteredEmployees
				.map((e) => e)
				.sort((a, b) => {
					var nameA = a.name.first.toLowerCase(),
						nameB = b.name.first.toLowerCase();
					if (nameA < nameB) return -1;
					if (nameA > nameB) return 1;
					return 0;
				});
			setClick(true);
			setFilteredEmployees(ascending);
		}
	};

	return (
		<>
			<Header />
			<Container style={{ minHeight: "95%", width: "80%" }}>
				<SearchResults
					employees={filteredEmployees}
					handleInputChange={handleInputChange}
					handleClick={handleClick}
				/>
			</Container>
		</>
	);
};

export default SearchPage;
