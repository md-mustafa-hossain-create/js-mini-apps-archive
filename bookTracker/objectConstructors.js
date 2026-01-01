// Book Constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
}

// Books Library
let booksLibrary = [];

// Get DOM elements
const openBtn = document.getElementById('openBtn');
const bookModal = document.getElementById('bookModal');
const closeBtn = document.querySelector('.close');
const bookForm = document.getElementById('bookForm');
const booksList = document.getElementById('booksList');

// Open modal
openBtn.addEventListener('click', function() {
    bookModal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', function() {
    bookModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === bookModal) {
        bookModal.style.display = 'none';
    }
});

// Add book to library
bookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    
    // Create new book
    const newBook = new Book(title, author);
    booksLibrary.push(newBook);
    
    // Clear form
    bookForm.reset();
    
    // Close modal
    bookModal.style.display = 'none';
    
    // Update display
    displayBooks();
    
    // Save to localStorage
    saveBooks();
});

// Display books
function displayBooks() {
    booksList.innerHTML = '';
    
    if (booksLibrary.length === 0) {
        booksList.innerHTML = '<p style="text-align: center; color: #999;">No books added yet. Click "Add Book" to start!</p>';
        return;
    }
    
    booksLibrary.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
        `;
        booksList.appendChild(bookItem);
    });
}

// Save books to localStorage
function saveBooks() {
    localStorage.setItem('booksLibrary', JSON.stringify(booksLibrary));
}

// Load books from localStorage
function loadBooks() {
    const saved = localStorage.getItem('booksLibrary');
    if (saved) {
        booksLibrary = JSON.parse(saved);
        displayBooks();
    }
}

// Initialize
loadBooks();
