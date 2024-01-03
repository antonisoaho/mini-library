type FieldConfig = {
  value: string | number;
  htmlType: string;
  bookPrint: boolean;
  modalTitle: boolean;
  type: string;
};

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

type ExtendedBook = {
  [K in keyof Book]: FieldConfig;
};

const createExtendedBook = (book: Book): ExtendedBook => {
  const extendedBook: ExtendedBook = {
    id: {
      value: book.id,
      htmlType: '',
      bookPrint: false,
      modalTitle: false,
      type: '',
    },
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
      value: book.pages || 'Unknown',
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
    color: {
      value: book.color,
      htmlType: '',
      bookPrint: false,
      modalTitle: false,
      type: '',
    },
  };

  return extendedBook;
};

export { Book, createExtendedBook, ExtendedBook };
