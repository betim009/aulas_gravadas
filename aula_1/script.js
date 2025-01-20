import { movies } from "./data.js";

const divTodosFilmes = document.getElementById('todos-filmes');

const filmesFavoritos = [];

movies.map((element) => 
    divTodosFilmes.innerHTML += `
        <div>
            <h2>${element.title}</h2>
            <img src="${element.poster}" />

            <div class="div-favoritar">

            </div>
        </div>
    `
);
const divsFavoritar = document.querySelectorAll('.div-favoritar'); 

divsFavoritar.forEach((element) => {
    const btnFavoritar = document.createElement('button');
    btnFavoritar.textContent = "Favoritar";
    element.appendChild(btnFavoritar);

    btnFavoritar.addEventListener('click', () => {
        alert();
    });
});