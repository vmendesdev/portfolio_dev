const listaProjetos = document.getElementById('lista_projetos');
const listaSelecionados = document.getElementById('lista_selecionados');
const projetos = ~document.querySelectorAll('.projetos');
const projetosSelecionados = [];

projetos.forEach(projetos=> {
    projetos.addEventListener('click',() => {
        const id = projetos.dataset.id;
        const nome = projetos.textContent;

        if (projetosSelecionados.includes(id)) {
            //Desselecionar projeto
            projetosSelecionados.splice(projetosSelecionados.indexOf(id), 1);

        projetos.classList.remove('selecionado');
            removerProjetosSelecionado(id);
        } else {
            //Selecionar projeto
            projetosSelecionados.push(id);
            projeto.classList.add('selecionado');
            adicionarProjetosSelecionado(id,nome);
        }
    });
});

function adicionarProjetosSelecionado(id, nome) {
    const itemLista = document.createElement ('li');
    itemLista.textContent = nome;
    itemLista.dataset.id = id;

    listaSelecionados.appendChild(itemLista);
}

function removerProjetosSelecionado(id) {
    const itemLista = listaSelecionados.querySelector(`[data-id="${id}"]`);
    
    if (itemLista) {
        listaSelecionados.removeChild(itemLista);
    }
}