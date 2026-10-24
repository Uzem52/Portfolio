console.log("Olá, mundo! Este é o meu primeiro script em JavaScript.");

const nome = "Eduardo Davi";
let hora = new Date().getHours();
console.log(hora);
let saudacao;
if (hora < 12) {
    saudacao = "Bom dia";
} else if (hora < 18) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}
console.log(saudacao);
const titulo = document.querySelector("h1");
titulo.textContent = saudacao + ", eu sou  " + nome + "!";

const botao = document.querySelector("#tema");
botao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
    botao.textContent = "Modo claro";
} else {
    botao.textContent = "Modo escuro";
 }
});
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.textContent = "Bem-vindo ao meu portfólio";
    }
}
if (window.location.pathname.includes("Projetos.html") || window.location.pathname.endsWith("/")) {
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.textContent = "Meus projetos";
    }
}
if (window.location.pathname.includes("Contatos.html") || window.location.pathname.endsWith("/")) {
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.textContent = "Fale comigo";
    }
}
if (window.location.pathname.includes("formacao.html") || window.location.pathname.endsWith("/")) {
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.textContent = "Minhas formações";
    }
}