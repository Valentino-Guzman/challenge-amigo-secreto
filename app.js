// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo === '') {
        alert('Por favor, inserte un nombre.')
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        recorrerAmigos();
    }
}

function recorrerAmigos() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        nuevaLista = document.createElement('li');
        nuevaLista.innerHTML = amigos[i];
        lista.appendChild(nuevaLista);
    }
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('No hay suficientes amigos disponibles para sortear.');
    } else {
        let amigoElegido = Math.floor((Math.random() * amigos.length));
        
        lista.innerHTML = '';

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto es: ${amigos[amigoElegido]}`;
    }
}