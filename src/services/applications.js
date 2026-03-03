import axios from "axios";
const baseUrl = "http://localhost:3001/applications";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addNew = (newApplication) => {
  const request = axios.post(baseUrl, newApplication);
  return request.then((response) => response.data);
};

export default { getAll, addNew };
