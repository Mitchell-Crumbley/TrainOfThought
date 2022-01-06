import axios from "axios";
import config from "./config";

const  baseUrl = "http://localhost:44395";
const websterAPI = "d9f530af-8c4a-4396-b4ef-6fcd57e3ac73";

const getUserRequests = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users/requests/${userId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const saveRequest = (request) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/requests/post`, request)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});

const deleteRequest = (id) => new Promise((resolve, reject) => {
  axios.delete(`${baseUrl}/requests/delete/${id}`)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});

const getWords = () => {
  var url = "https://dictionaryapi.com/api/v3/references/thesaurus/json/" + document.getElementById('text').value + "?key=d9f530af-8c4a-4396-b4ef-6fcd57e3ac73";
 return(url);
};

const getWebsterWord = () => new Promise((resolve, reject) => {
  axios.get(`https://dictionaryapi.com/api/v3/references/thesaurus/json/` + document.getElementById('text').value + `?key=${websterAPI}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export {
  getUserRequests,
  saveRequest,
  deleteRequest,
  getWebsterWord
}
