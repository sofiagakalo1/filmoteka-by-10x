export const refs = {
  galleryList: document.querySelector('.collection_list'),
  pagin_box: document.querySelector('.pagin_box'),
  formSearch: document.querySelector('.search-form'),

  header: document.querySelector('.header'),
  logo: document.querySelector('.header .logo'),
  homeLink: document.querySelector('#home-link'),
  myLibraryLink: document.querySelector('#my-library-link'),
  headerButtons: document.querySelectorAll('.header-button'),
  loginButton: document.querySelector('[data-action="login"]'),
  logoutButton: document.querySelector('[data-action="logout"]'),
  watchedButton: document.querySelector('[data-activ="watched"]'),
  queueButton: document.querySelector('[data-activ="queue"]'),

  modalWatchedButton: document.querySelector('[data-action-modal-watched]'),
  modalQueueButton: document.querySelector('[data-action-modal-queue]'),

  auth: document.querySelector('.auth'), //Бекдроп вікна для авторизації
  authForm: document.querySelector('.auth__form'), //Форма авторизації
  authCancelButton: document.querySelector('.auth [data-action="cancel"]'), //Кнопка Cancel
};