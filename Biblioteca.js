function MostrarMensajes() {
  let titulo = document.getElementById("titulo").value;
  let autor = document.getElementById("autor").value;
  let anio = document.getElementById("anio").value;
  let categoria = document.getElementById("categoria").value;

  if (titulo && autor && anio) {
    alert("📚 Libro registrado:\nTítulo: " + titulo + 
          "\nAutor: " + autor + 
          "\nAño: " + anio + 
          "\nCategoría: " + categoria);
  } else {
    alert("⚠️ Por favor, completa todos los campos.");
  }
}
