import bookCreator from './modules/BookUtils.js';
import { createExtendedBook } from './modules/interfaces/BookModel.js';
import bookSearcher from './modules/SearchModule.js';
let books;
const getBooks = async () => {
    const mainUrl = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
    try {
        const response = await fetch(mainUrl);
        if (!response)
            throw new Error('Error catching books.');
        const booksData = await response.json();
        books = booksData.map((book) => createExtendedBook(book));
    }
    catch (error) {
        console.log(error);
    }
};
const libraryMaker = () => {
    document.querySelector('input').addEventListener('keyup', function () {
        bookSearcher(this.value);
    });
    document.querySelector('.bookcase__header--text').textContent = `${books.length} Classic Childrens books`;
    const bookcase = document.querySelector('.bookcase__books');
    books.forEach((book) => {
        bookcase.append(bookCreator(book, 'book'));
    });
};
(async () => {
    await getBooks();
    libraryMaker();
})();
