import axios from "axios";

const SearchTerms = () => {
	return axios.get("https://randomuser.me/api/?results=35&nat=us");
};

export default SearchTerms;
