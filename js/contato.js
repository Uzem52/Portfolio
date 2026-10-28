const formulario = document.querySelector("#formulario");
const resposta = document.querySelector("#resposta");
formulario.addEventListener("submit", function (evento) {
evento.preventDefault();
const nome = document.querySelector("#nome").value;
const mensagem = document.querySelector("#mensagem").value.trim();

if (mensagem.length < 10) {
resposta.textContent = "Por favor, digite uma mensagem com pelo menos 10 caracteres.";
resposta.classList.add("erro");
} else {
resposta.textContent = "Obrigado por entrar em contato, " + nome + "! Em breve entrarei em contato com você.";
resposta.classList.remove("erro");
formulario.reset();
}
});