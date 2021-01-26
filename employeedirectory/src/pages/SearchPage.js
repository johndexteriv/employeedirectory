// import React, {useState, useEffect} from "react";
import React from "react";
// import API from "../utils/API";
import Container from "../components/Container";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";

const SearchPage = () => {
	return (
		<>
			<Header />
			<Container style={{ height: "95%", width: "100%" }}>
				<SearchForm />
			</Container>
		</>
	);
};

export default SearchPage;
