function toggleSection(sectionId, element) {
  var section = document.getElementById(sectionId);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    element.innerHTML = "−";
  } else {
    section.style.display = "none";
    element.innerHTML = "+";
  }
}

// Inicialización del acordeón
document.addEventListener('DOMContentLoaded', function() {
  var sections = document.getElementsByClassName('menu-section');
  var titles = document.getElementsByClassName('toggle-symbol');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'block'; // Todas las secciones abiertas por defecto
    titles[i].innerHTML = "−"; // Establece el símbolo a "−" ya que todas las secciones están abiertas
  }
});
