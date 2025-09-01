function MostrarMensaje() {
  alert("¡Hola! Bienvenido a la biblioteca 📚");
}

function MostrarMensajes() {
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const anio = document.getElementById("anio").value;
  const categoria = document.getElementById("categoria").value;

  
  alert(`Libro: ${titulo}\nAutor: ${autor}\nAño: ${anio}\nCategoría: ${categoria}`);

  
  const lista = document.getElementById("listaLibros");
  const nuevoLibro = document.createElement("p");
  nuevoLibro.textContent = `📖 ${titulo} - ${autor} (${anio}) [${categoria}]`;
  lista.appendChild(nuevoLibro);
}


window.onload = MostrarMensaje;
