const bookSearcher = (input: string): void => {
  const allBooks: NodeListOf<HTMLElement> = document.querySelectorAll('.book');

  allBooks.forEach((book) => {
    const bookTitle: string = book.getAttribute('data-title').toLowerCase();
    const bookAuthor: string = book.getAttribute('data-author').toLowerCase();

    if (!bookTitle.includes(input.toLowerCase()) && !bookAuthor.includes(input.toLowerCase())) {
      book.classList.add('hide');
    } else {
      book.classList.remove('hide');
    }
  });
};

export default bookSearcher;
