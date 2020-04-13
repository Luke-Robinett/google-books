import axios from "axios";

const apiKey = "AIzaSyDN2taYwD5rUOTnXEVucFgo1tcI6Nvonpk";
const baseUrl = "http://localhost:3001";

const api = {
    findBooks: (title, cb) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`)
            .then(response => cb(null, response))
            .catch(error => cb(error));
    },

    saveBook: (book, cb) => {
        axios.post(`${baseUrl}/api/books`, { book: book })
            .then(response => cb(null, response))
            .catch(error => cb(error));
    },

    test: () => {
        axios.get(`${baseUrl}/api`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    },

    parseGoogleBooksResponse: response => {
        // Use destructuring with default values to transform the API response as needed
        const {
            data: {
                items = []
            } = null
        } = response;

        // Transform each element in the array
        const books = items.map(item => {
            const {
                id = "",
                volumeInfo: {
                    title = "(No Title)",
                    subtitle = "",
                    authors = [],
                    description = "",
                    infoLink = "",
                    imageLinks: {
                        thumbnail = ""
                    } = null
                } = null
            } = item;

            // Return an object whose keys match the format of our Mongoose Book model
            return ({
                bookId: id,
                title: title,
                subtitle: subtitle,
                authors: authors,
                description: description,
                image: thumbnail,
                link: infoLink
            });
        });

        // Return the newly formatted array of books
        return books;
    }
};

export default api;
