import axios from "axios";
import config from "./config";

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${config.baseUrl}/api/user`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
});

const getSingleUser = (id) => new Promise((resolve, reject) => {
  axios.get(`${config.baseUrl}/api/user/${id}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getUserByFBKey = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${config.baseUrl}/user/firebasekey/${firebaseKey}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});


const createNewUser = (user) => new Promise((resolve, reject) => {
  axios.post(`${config.baseUrl}/api/user`, user)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});


const hardDeleteUser = (id) => new Promise((resolve, reject) => {
  axios.delete(`${config.baseUrl}/api/users/${id}`)
  .then(response => resolve(response))
  .catch(error => reject(error));
})

export {
  getSingleUser, createNewUser, getAllUsers,hardDeleteUser, getUserByFBKey,
};
