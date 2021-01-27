import axios from "axios";

const SearchTerms = (query) => {
	return axios.get("https://randomuser.me/api/?" + query);
};

export default SearchTerms;
