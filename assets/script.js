const d = (e)=>document.querySelector(e);
const da = (e)=>document.querySelectorAll(e);

// Animação Container
let container = d(".container");
let container2 = d(".container.segundo");

window.onload = function() {
    if(d(".container").classList.contains("hide")) {
        container.classList.remove("hide");
        container.classList.add("show");
        container2.classList.remove("hide");
        container2.classList.add("show");
    }
};

// Evento de clique no HEADER (deslizar scroll)
const menuItems = da(".lado_2 ul li"); // Definindo a variavel onde serão selecionados os HREFs

menuItems.forEach(item => {
    item.addEventListener("click", eventClick); // Para cada item selecionado (Sobre mim, Experiência e Objetivos e Contato) será adicionado evento de clique linkando com uma outra função chamada eventClick
})

function eventClick(Element) {
    Element.preventDefault(); // Retira definições padrões do navegador
    const getTarget = Element.target; // o Target buscará o elemento (li) e retornará na variavel
    const getId = getTarget.getAttribute("href"); // Pegou o atributo "href" da tag li.
    const section = d(getId).offsetTop; // realiza a transição entre os tópicos e mostra a quantidade de pixels em distancia ao topo
    window.scrollTo({
        top: section - 145,
        behavior: "smooth"
    }); // top realiza a transição inserida em section com um margin de 145 px para o topo a fim de deixar o header aparecendo sem cobrir o conteúdo. Behavior para transição suave.
}