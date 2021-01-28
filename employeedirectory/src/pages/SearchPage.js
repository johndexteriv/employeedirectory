import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";

const SearchPage = () => {
	const [search, setSearch] = useState("results=50");
	const [employees, setEmployees] = useState({});

	useEffect(() => {
		API(search).then((res) => {
			if (res.data.length === 0) {
				throw new Error("No results found.");
			}
			if (res.data.status === "error") {
				throw new Error(res.data.message);
			}
			setEmployees(res.data.results);
			// console.log(res);
		});
		// .catch((error) => setError(error));
	}, [search]);

	const handleInputChange = (event) => {
		setSearch(event.target.value);
	};

	return (
		<>
			<Header />
			<Container style={{ minHeight: "95%", width: "80%" }}>
				<SearchForm handleInputChange={handleInputChange} results={search} />
				<SearchHeader />
				<SearchResults employees={employees} />
			</Container>
		</>
	);
};

export default SearchPage;
