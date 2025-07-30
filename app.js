//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (!nome) {
        alert('precisa inserir o nome de seus amigos');
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = '';
    input.focus();
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function limpaCampo() {
    amigos = []; // Limpa o array
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista na tela
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('precisa de 2 ou mais amigos para fazer o sorteio');
        return;
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${sorteado}</li>`;
    limpaCampo(); // Limpa a lista após o sorteio
}
