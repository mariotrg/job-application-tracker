import axios from "axios";
const baseUrl = "http://localhost:3000/applications";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const deleteApplication = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updateApplication = (id, updatedApplication) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedApplication);
  return request.then((response) => response.data);
};

const addNew = (newApplication) => {
  const request = axios.post(baseUrl, newApplication);
  return request.then((response) => response.data);
};

export default { getAll, deleteApplication, updateApplication, addNew };
