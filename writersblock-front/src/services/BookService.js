import axios from "axios";

const BOOK_API_BASE_URL = "http://localhost:8080/api/v1/book";

class BookService{
    saveBook(book){
        return axios.post(BOOK_API_BASE_URL, book);
    }

    getBooks(){
        return axios.get(BOOK_API_BASE_URL + "s");
    }

    updateBook(book){
        return axios.put(BOOK_API_BASE_URL, book);
    }

    deleteBook(id){
        return axios.delete(BOOK_API_BASE_URL + "/" + id);
    }
}

export default new BookService();