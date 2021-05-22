import Axios from "axios";
const baseUrl = "http://localhost:3001/usersData";

const getAll = () => Axios.get(baseUrl).then((response) => response.data);

const create = (newObj) =>
  Axios.post(baseUrl, newObj).then((response) => response.data);

const update = (id, updatedObj) =>
  Axios.put(`${baseUrl}/${id}`, updatedObj).then((response) => {
    console.log(response);
  });

const remove = (id) =>
  Axios.delete(`${baseUrl}/${id}`).then((response) => {
    console.log(response);
    return response.data;
  });

export default { getAll, create, update, remove };
