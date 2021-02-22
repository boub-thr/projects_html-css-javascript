const searchBtn = document.querySelector('.btn');
console.log(searchBtn);

const searchToAcitvate = document.querySelector('.search');
console.log(searchToAcitvate);

const searchInput = document.querySelector('.search-input');
console.log(searchInput);


searchBtn.addEventListener('click', () => {
    searchToAcitvate.classList.toggle('active');
    searchInput.focus();
} );
