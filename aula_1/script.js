import { movies } from "./data.js";

const divTodosFilmes = document.getElementById('todos-filmes');
const divFilmesFavoritos = document.getElementById('filmes-favoritos');

movies.forEach((element, index) => {
    divTodosFilmes.innerHTML += `
    <div> 
        <img src="${element.poster}" />
        <h2>${element.title}</h2>
        <div class="footer-filme"> 
        
        </div>
    </div>
    `
});
const footerFilmes = document.querySelectorAll('.footer-filme');

footerFilmes.forEach((element, index) => {
    element.innerHTML += `
        <button> Favoritar </button>
    `
});

console.log(footerFilmes);
