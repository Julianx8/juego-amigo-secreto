// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('nombreIngresado').value;
    document.getElementById('nombreIngresado').valua ='';

    if (nombreAmigo === '') {
        alert('Por favor, Inserte un nombre');
        return;
    } else {
         amigos.push(nombreAmigo);
         

}
    console.log(nombreAmigo);
    console.log(amigos);
}

agregarAmigo();
