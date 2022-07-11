import {showBookList} from '../modules/Display.js'

const button = document.getElementById('addbook');

button.addEventListener('click', () => {
  book.addBooks();
});

document.addEventListener('DOMContentLoaded', () => {
  showBookList();
});