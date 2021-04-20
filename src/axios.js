import axios from "axios";

const instance = axios.create({
   
    baseURL: "https://vaaroy-tinder-backend.herokuapp.com",
});

export default instance;