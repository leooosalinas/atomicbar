function setLanguage(language) {
  localStorage.setItem('selectedLanguage', language);
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.dataset.translate;
    el.textContent = translations[language][key] || el.textContent;
  });

  document.querySelectorAll("[data-price]").forEach(el => {
    const priceKey = el.dataset.price;
    el.textContent = prices[priceKey] || el.textContent;
  });

  // Actualizar el estilo del botón activo
  document.querySelectorAll("#language-selector button").forEach(button => {
    button.classList.remove('button-active');
  });
  document.querySelector(`#btn-${language}`).classList.add('button-active');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
  setLanguage(savedLanguage);
  document.querySelector(`#btn-${savedLanguage}`).classList.add('button-active');
});

document.addEventListener('DOMContentLoaded', () => {
  // Verificar si hay un idioma guardado en el almacenamiento local y establecerlo
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
  setLanguage(savedLanguage);
  document.querySelector('#language-selector select').value = savedLanguage;
});

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

window.onload = function() {
            var logoContainer = document.getElementById('logoContainer');
            var rotateDirection = Math.random() < 0.5 ? 'rotateLogoRight' : 'rotateLogoLeft';
            logoContainer.style.animation = rotateDirection + ' 60s linear infinite';
        };

