import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

const SearchPage = () => {
	const [search, setSearch] = useState([{}]);
	const [employees, setEmployees] = useState([{}]);

	useEffect(() => {
		API().then((res) => {
			if (res.data.length === 0) {
				throw new Error("No results found.");
			}
			if (res.data.status === "error") {
				throw new Error(res.data.message);
			}
			console.log("Response before set employees", res.data.results);
			setEmployees(res.data.results);
		});
		// .catch((error) => setError(error));
	}, []);
	console.log("Search Page SetEmployees", employees);

	const handleInputChange = (event) => {
		console.log("this is the search input", event.target.value);
	};

	// const handleFilter = () => {
	// On click handle asec/desc employee sorting
	// To be passed through search results
	// }

	return (
		<>
			<Header />
			<Container style={{ minHeight: "95%", width: "80%" }}>
				<SearchForm handleInputChange={handleInputChange} results={search} />
				<SearchResults employees={employees} />
			</Container>
		</>
	);
};

export default SearchPage;
