import { ExtendedBook } from './interfaces/BookModel.js';
import { DetailElement } from './interfaces/DetailElement.js';

const bookCreator = (book: ExtendedBook, info: string): HTMLDivElement => {
  const bookElement = <HTMLDivElement>document.createElement('div');

  for (const key in book) {
    if (book.hasOwnProperty(key) && book[key].bookPrint) {
      const propertyElement = document.createElement(book[key].htmlType);
      propertyElement.classList.add(`${info}-${key}`);
      propertyElement.textContent = book[key].value;

      bookElement.append(propertyElement);
    }
  }

  bookElement.classList.add(info);
  bookElement.style.backgroundColor = book['color'];
  bookElement.setAttribute('data-title', book.title.value);
  bookElement.setAttribute('data-author', book.author.value);

  if (info === 'book') {
    bookElement.addEventListener('click', () => {
      showModalInfo(book);
    });
  }
  return bookElement;
};

const renderModalInfo = (book: ExtendedBook): HTMLDivElement => {
  const infoPage = <HTMLDivElement>document.createElement('div');
  infoPage.classList.add('details');

  const details: DetailElement = {
    header: document.createElement('div'),
    text: document.createElement('div'),
    info: document.createElement('div'),
    button: document.createElement('div'),
  };

  details.header.classList.add('details__header');
  details.text.classList.add('details__text');
  details.info.classList.add('details__info');
  details.button.classList.add('details__button');

  details.button.textContent = 'Oh, I want to read it!';

  for (const key in book) {
    if (book.hasOwnProperty(key)) {
      const property: { value: any; htmlType: string; modalTitle: boolean; type: string } =
        book[key];

      if (property.htmlType) {
        const propertyElement = document.createElement(property.htmlType);
        const value: string = property.value === null ? 'Unknown' : String(property.value);
        propertyElement.classList.add(`details--${key}`);

        let text: string = property.modalTitle
          ? `${
              key === 'author'
                ? 'By'
                : '<b>' + key.charAt(0).toUpperCase() + key.slice(1) + ': </b>'
            } ${value}`
          : value;

        propertyElement.innerHTML = text;

        const detailsSection: HTMLDivElement = details[property.type];
        if (detailsSection) detailsSection.append(propertyElement);
      }
    }
  }
  for (const section in details) {
    if (details.hasOwnProperty(section)) infoPage.append(details[section]);
  }
  return infoPage;
};

const showModalInfo = (book: ExtendedBook): void => {
  const modalContainer: HTMLDivElement = document.querySelector('.modal-container');

  while (modalContainer.lastElementChild) {
    modalContainer.removeChild(modalContainer.lastElementChild);
  }

  const closeButton: HTMLDivElement = document.createElement('div');
  closeButton.classList.add('modal-container--close');
  modalContainer.append(bookCreator(book, 'modal'), renderModalInfo(book), closeButton);

  closeButton.addEventListener('click', toggleModalVisibility);
  toggleModalVisibility();
};

const toggleModalVisibility = () => {
  document.querySelector('.bookmodal').classList.toggle('hide');
};

export default bookCreator;
