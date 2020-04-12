import axios from "axios";

const apiKey = "AIzaSyDN2taYwD5rUOTnXEVucFgo1tcI6Nvonpk";
const baseUrl = "http://localhost:3001";

const api = {
    findBooks: (title, cb) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`)
            .then(response => cb(null, response))
            .catch(error => cb(error));
    },

    saveBook: book => {
        axios.post(`${baseUrl}/api/books`, { book: book })
            .then(response => console.log(response))
            .catch(() => console.log("Couldn't save."));
    },

    test: () => {
        axios.get(`${baseUrl}/api`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
};

export default api;
