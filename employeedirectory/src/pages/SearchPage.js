import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

const SearchPage = () => {
	// const [search, setSearch] = useState([{}]);
	const [employees, setEmployees] = useState([{}]);

	useEffect(() => {
		API().then((res) => {
			if (res.data.length === 0) {
				throw new Error("No results found.");
			}
			if (res.data.status === "error") {
				throw new Error(res.data.message);
			}
			setEmployees(res.data.results);
			// setSearch(res.data.results);
		});
		// .catch((error) => setError(error));
	}, []);

	const handleInputChange = (event) => {
		console.log("this is the search input", event.target.value);
		console.log("handle input change employees", employees);
	};

	// const handleClick = (event) => {
	// 	console.log("clickedddd", event.target.value);
	// };
	// console.log(handleClick);
	return (
		<>
			<Header />
			<Container style={{ minHeight: "95%", width: "80%" }}>
				<SearchResults
					employees={employees}
					handleInputChange={handleInputChange}
				/>
			</Container>
		</>
	);
};

export default SearchPage;
