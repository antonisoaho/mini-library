interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number;
  pages: number | null;
  plot: string;
  audience: string;
  color: string;
}

interface ExtendedBook {
  title: { value: string; htmlType: string; bookPrint: boolean; modalTitle: boolean; type: string };
  author: {
    value: string;
    htmlType: string;
    bookPrint: boolean;
    modalTitle: boolean;
    type: string;
  };
  publisher: {
    value: string;
    htmlType: string;
    bookPrint: boolean;
    modalTitle: boolean;
    type: string;
  };
  year: { value: number; htmlType: string; bookPrint: boolean; modalTitle: boolean; type: string };
  pages: {
    value: number | null;
    htmlType: string;
    bookPrint: boolean;
    modalTitle: boolean;
    type: string;
  };
  plot: { value: string; htmlType: string; bookPrint: boolean; modalTitle: boolean; type: string };
  audience: {
    value: string;
    htmlType: string;
    bookPrint: boolean;
    modalTitle: boolean;
    type: string;
  };
  color: string;
}

const createExtendedBook = (book: Book): ExtendedBook => {
  const extendedBook: ExtendedBook = {
    title: {
      value: book.title,
      htmlType: 'h2',
      bookPrint: true,
      modalTitle: false,
      type: 'header',
    },
    author: {
      value: book.author,
      htmlType: 'p',
      bookPrint: true,
      modalTitle: true,
      type: 'header',
    },
    publisher: {
      value: book.publisher,
      htmlType: 'p',
      bookPrint: false,
      modalTitle: true,
      type: 'info',
    },
    year: {
      value: book.year,
      htmlType: 'p',
      bookPrint: false,
      modalTitle: true,
      type: 'info',
    },
    pages: {
      value: book.pages,
      htmlType: 'p',
      bookPrint: false,
      modalTitle: true,
      type: 'info',
    },
    plot: {
      value: book.plot,
      htmlType: 'p',
      bookPrint: false,
      modalTitle: false,
      type: 'text',
    },
    audience: {
      value: book.audience,
      htmlType: 'p',
      bookPrint: false,
      modalTitle: true,
      type: 'info',
    },
    color: book.color,
  };

  return extendedBook;
};

export { Book, createExtendedBook, ExtendedBook };
