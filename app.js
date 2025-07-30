// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('nombreIngresado').value;
    document.getElementById('nombreIngresado').value = '';
        if (nombreAmigo === '') {
        alert('Por favor, Inserte un nombre');
        return;
        } else {
        amigos.push(nombreAmigo);
        recorrerListaAmigos(); // Actualiza la lista visual
        }
    }

function recorrerListaAmigos() {
    let ListaAmigos = document.getElementById('listaAmigos');
    ListaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        li.classList.add('name-item');
        ListaAmigos.appendChild(li);
    });
}
// Función para seleccionar aleatoriamente un amigo y mostrarlo en el DOM
function sortearUnAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    // Generar índice aleatorio
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos.splice(indice, 1)[0]; // Elimina el sorteado
    // Mostrar el resultado en el elemento con id 'resultadoSorteo'
        let resultadoElemento = document.getElementById('resultadoSorteo');
        if (resultadoElemento) {
        resultadoElemento.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
        } else {
        alert('Elemento para mostrar el resultado no encontrado.');
        }
        recorrerListaAmigos(); // Actualiza la lista visual tras sortear
    }

