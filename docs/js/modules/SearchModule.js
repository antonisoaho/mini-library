const bookSearcher = (input) => {
    const allBooks = document.querySelectorAll('.book');
    allBooks.forEach((book) => {
        const bookTitle = book.getAttribute('data-title').toLowerCase();
        const bookAuthor = book.getAttribute('data-author').toLowerCase();
        if (!bookTitle.includes(input.toLowerCase()) && !bookAuthor.includes(input.toLowerCase())) {
            book.classList.add('hide');
        }
        else {
            book.classList.remove('hide');
        }
    });
};
export default bookSearcher;
