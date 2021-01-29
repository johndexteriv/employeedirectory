import axios from "axios";

const SearchTerms = () => {
	return axios.get("https://randomuser.me/api/?results=25");
};

export default SearchTerms;
