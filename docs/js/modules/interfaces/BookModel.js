const createExtendedBook = (book) => {
    const extendedBook = {
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
export { createExtendedBook };
