import axios from "axios";

const SearchTerms = () => {
	return axios.get("https://randomuser.me/api/?results=50&nat=us");
};

export default SearchTerms;
