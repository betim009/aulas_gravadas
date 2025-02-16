const refrigerantes = [
    { nome: "Coca-Cola", sabor: "Cola", volume: 350, preco: 5.0 },
    { nome: "Pepsi", sabor: "Cola", volume: 500, preco: 6.0 },
    { nome: "Fanta", sabor: "Laranja", volume: 350, preco: 4.5 },
    { nome: "Sprite", sabor: "Limão", volume: 600, preco: 7.0 },
    { nome: "Guaraná Antarctica", sabor: "Guaraná", volume: 350, preco: 5.5 }
];

refrigerantes.forEach(e => {
    e.preco = e.preco + 0.5
})

console.log(refrigerantes)