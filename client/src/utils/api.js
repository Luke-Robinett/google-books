import axios from "axios";

const apiKey = "AIzaSyDN2taYwD5rUOTnXEVucFgo1tcI6Nvonpk";

const api = {
    findBooks: (title, cb) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`)
            .then(response => cb(null, response))
            .catch(error => cb(error));
    }
};

export default api;
