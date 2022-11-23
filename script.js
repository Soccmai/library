const container = document.querySelector('.right');

function addBook() {
    const titleAdd = document.getElementById('title-add').value;
    const readAdd = document.getElementById('read-add').value;
    const totalAdd = document.getElementById('total-add').value;


    if (titleAdd == '' || readAdd == '' || totalAdd == '') {
        alert('Complete all of the boxes');
        return;
    }   else if (readAdd > totalAdd) {
        alert('why are you lying? =[[');
        return;
    }

    const book = document.createElement('div');
    book.classList.add('book');
    container.appendChild(book);

    const xButton = document.createElement('button');
    xButton.classList.add('remove');
    book.appendChild(xButton);
    xButton.innerHTML = 'X';

    const title = document.createElement('h2');
    book.appendChild(title);
    title.innerHTML = titleAdd;

    const author = document.createElement('h3');
    book.appendChild(author);
    author.innerHTML = document.getElementById('author-add').value;

    const pages = document.createElement('h3');
    book.appendChild(pages);
    const pagesNumber = readAdd + '/' + totalAdd;
    pages.classList.add('page-num')
    pages.innerHTML = pagesNumber; 
}

const button = document.querySelector('.add');
button.onclick = addBook;

document.querySelector('.remove').onclick = function (e) {
    document.querySelector('.book').remove();
}