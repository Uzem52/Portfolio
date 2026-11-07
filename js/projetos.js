const projetos = [
    { titulo: "Portfólio", descricao: "Meu site, com 5 paginas no ar"},
    { titulo: "Protótipo figma", descricao: "4 telas de um site fictício"},
];
console.log(projetos[0].titulo);
const listaProjetos = document.querySelector("#lista-projetos");

function criarCard(projeto) {
    const card = document.createElement ("section");
    card.classList.add("card");
    const titulo = document.createElement("h2");
    titulo.textContent = projeto.titulo;
    const texto = document.createElement("p");
    texto.textContent = projeto.descricao;
    card.appendChild(titulo);
    card.appendChild(texto);
    listaProjetos.appendChild(card);
}
fetch("projetos.json")
    .then((resposta) => resposta.json())
    .then(projetos => {
        for (const projeto of projetos) {
            criarCard(projeto);
        }
    });