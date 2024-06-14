// Event listener para cambiar el color al hacer click en los divs
document.getElementById('blue').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.getElementById('red').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.getElementById('green').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.getElementById('yellow').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});


// Variable global para almacenar el color

let color;


// Event listener para las teclas a, s y d

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    } else if (event.key === 'd') {
        color = 'lightblue';
    } 
    
    // // Event listener para las teclas q, w y e

    else if (event.key === 'q') {
        crearDiv('purple');
    } else if (event.key === 'w') {
        crearDiv('gray');
    } else if (event.key === 'e') {
        crearDiv('brown');
    }
    document.getElementById('key').style.backgroundColor = color;
});

// Función para crear un nuevo div con el color especificado

function crearDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
}