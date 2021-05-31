import Axios from "axios";
const baseUrl = "http://localhost:3001";

const getAll = (path) =>
  Axios.get(`${baseUrl}/${path}`).then((response) => response.data);

// const create = (newObj) =>
//   Axios.post(baseUrl, newObj).then((response) => response.data);

// const update = (id, updatedObj) =>
//   Axios.put(`${baseUrl}/${id}`, updatedObj).then((response) => {
//     console.log(response);
//   });

// const remove = (id) =>
//   Axios.delete(`${baseUrl}/${id}`).then((response) => {
//     console.log(response);
//     return response.data;
//   });

const DataService = { getAll };

export default DataService;
