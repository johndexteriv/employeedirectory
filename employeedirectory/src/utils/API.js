import axios from "axios";

const SearchTerms = (query) => {
	return axios.get("https://randomuser.me/api/?" + query + "results=50");
};

export default SearchTerms;
