import {book,showBookList} from './Display.js';
const button = document.getElementById('addbook');
const removeBtn = document.getElementById('removebtn');
button.addEventListener('click', () => {
  book.addBooks();
});

document.addEventListener('DOMContentLoaded', ()=> { 
showBookList();
});
