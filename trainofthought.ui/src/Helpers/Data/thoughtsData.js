import axios from "axios";
import config from "./config";

// thought data
const  baseUrl = "http://localhost:44395";

const getAllThoughts = () => new Promise((resolve, reject) => {
  axios.get(`${config.baseUrl}/api/thoughts`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
});

const getUserThoughts = (userId) => new Promise((resolve, reject) => {
  axios.get(`${config.baseUrl}/user/thoughts/${userId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const saveThought = (thought) => new Promise((resolve, reject) => {
  axios.post(`${config.baseUrl}/thoughts/post`, thought)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});

const updateThought = (thought) => new Promise((resolve, reject) => {
  axios.put(`${config.baseUrl}/api/thoughts/${thought.Id}`, thought)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});

const deleteThought = (Id) => new Promise((resolve, reject) => {
  axios.delete(`${baseUrl}/thoughts/delete/${Id}`)
  .then(response => resolve(response))
  .catch(error => reject(error));
});


export {
  getUserThoughts,
  saveThought,
  updateThought,
  deleteThought,
  getAllThoughts,
};
