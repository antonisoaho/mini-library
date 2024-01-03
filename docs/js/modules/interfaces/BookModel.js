const createExtendedBook = (book) => {
    const extendedBook = {
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
export { createExtendedBook };
