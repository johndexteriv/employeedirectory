import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

const SearchPage = () => {
	const [search, setSearch] = useState("");
	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [dob, setDob] = useState("");
	// const [employees, setEmployees] = useState({
	// 	image: "",
	// 	name: "",
	// 	phone: "",
	// 	email: "",
	// 	dob: "",
	// });

	useEffect(() => {
		API(search).then((res) => {
			if (res.data.length === 0) {
				throw new Error("No results found.");
			}
			if (res.data.status === "error") {
				throw new Error(res.data.message);
			}
			console.log(res.data.results);
			setName(res.data.results.name);
		});
		// .catch((error) => setError(error));
	}, [search]);

	const handleInputChange = (event) => {
		setSearch(event.target.value);
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
				<SearchResults />
			</Container>
		</>
	);
};

export default SearchPage;
