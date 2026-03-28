import axios from "axios";
const baseUrl = "/api/applications";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const add = (newApplication) => {
  const request = axios.post(baseUrl, newApplication);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const update = (id, updatedApplication) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedApplication);
  return request.then((response) => response.data);
};

export default { getAll, add, remove, update };
