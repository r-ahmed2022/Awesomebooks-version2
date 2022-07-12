import {book} from './Books.js';
 export const showBookList = () => {
    const storedBook = JSON.parse(localStorage.getItem('books'));
    let html = '<div>';
    html += '<table class="center">';
    for (let i = 0; i < storedBook.length; i += 1) {
      book.booklist.push({ title: storedBook[i].title, author: storedBook[i].author });
      html += '<tr class="rows">';
      html += `<td> "${book.booklist[i].title}" by ${book.booklist[i].author}</td>`;
      html += `<td class="test"><button class="remove-btn" id="removebtn"
      onclick="book.deleteBook(${i})"> Remove </button> </td>`;
      html += '</tr>';
      document.getElementById('list').innerHTML = html;
    }
    html += '</table>';
  }

export {book} from './Books.js';
