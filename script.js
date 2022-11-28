const container = document.querySelector('.right');
const removeButtons = document.querySelectorAll('.remove');

function addBook() {
    const titleAdd = document.getElementById('title-add').value;
    let readAdd = document.getElementById('read-add').value;
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
    pages.classList.add('page-num')
    pages.innerHTML = readAdd + '/' + totalAdd; 

    const addPagesButton = document.createElement('button');
    addPagesButton.classList.add('add-pages-button');
    book.appendChild(addPagesButton);
    addPagesButton.innerHTML = '+';

    addPagesButton.addEventListener('click', addPagesRead);
    xButton.addEventListener('click', removeBook);

        
    function addPagesRead() {
        if (readAdd == totalAdd) {
            alert('how????');
            removeBook;
            return;
        }
        readAdd++;
        pages.innerHTML = readAdd + '/' + totalAdd;
    }

}

const button = document.querySelector('.add');
button.onclick = addBook;


function removeBook(e) {
    e.target.parentElement.classList.add('scale-out-center');
    setTimeout(function () {
    e.target.parentElement.remove()}, 500);
}


  
