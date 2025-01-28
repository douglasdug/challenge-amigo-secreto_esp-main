// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear una lista vacía para los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value;

  // Verificar si el campo de texto está vacío
  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  // Agregar el nombre a la lista de amigos
  amigos.push(nombre);
  mostrarLista();
  input.value = "";
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  // Recorrer la lista de amigos y agregar cada nombre a la lista en el HTML
  for (let amigo of amigos) {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay nombres en la lista para sortear.");
    return;
  }

  // Seleccionar un nombre aleatorio de la lista
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indiceAleatorio];

  // Mostrar el nombre sorteado en la página
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<li>El amigo secreto es: " + amigoSecreto + "</li>";
}
