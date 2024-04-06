/* FUNCIONALIDAD PARA EXHIBIR IDIOMA */
function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.dataset.translate;
        el.textContent = translations[language][key] || el.textContent;
    });
    
    // Mostrar precio
    document.querySelectorAll("[data-price]").forEach(el => {
        const priceKey = el.dataset.price;
        el.textContent = prices[priceKey] || el.textContent;
    });

    // ON/OFF para botón seleccionado (idioma) seleccionado
    document.querySelectorAll("#language-selector button").forEach(button => {
        button.classList.remove('button-active');
    });
    document.querySelector(`#btn-${language}`).classList.add('button-active');
}

/* FUNCIONES DE IDIOMA */
document.addEventListener('DOMContentLoaded', () => {
  // Obtener el idioma del navegador y ajustarlo si es necesario
  let userLang = navigator.language || navigator.userLanguage; 
  userLang = userLang.split('-')[0]; // Convierte códigos como 'en-US' a 'en'

  // Comprobar si el idioma está disponible, si no, usar catalán como predeterminado
  if (!['es', 'en', 'ca'].includes(userLang)) {
    userLang = 'ca';
  }

  // Establecer el idioma según el navegador o el guardado en localStorage
  const savedLanguage = localStorage.getItem('selectedLanguage') || userLang;
  setLanguage(savedLanguage);
  document.querySelector(`#btn-${savedLanguage}`).classList.add('button-active');
});

/* EXPANDIR Y CONTRAER MENÚ ACORDEÓN */
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

/* ACORDEÓN */
document.addEventListener('DOMContentLoaded', function () {
    var sections = document.getElementsByClassName('menu-section');
    var titles = document.getElementsByClassName('toggle-symbol');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'block'; // Todas las secciones abiertas por defecto
        titles[i].innerHTML = "−"; // Establece el símbolo a "−" ya que todas las secciones están abiertas
    }
});

/* ROTACIÓN DE LOGOTIPO */
window.onload = function () {
    var logoContainer = document.getElementById('logoContainer');
    var rotateDirection = Math.random() < 0.5 ? 'rotateLogoRight' : 'rotateLogoLeft';
    logoContainer.style.animation = rotateDirection + ' 60s linear infinite';
};