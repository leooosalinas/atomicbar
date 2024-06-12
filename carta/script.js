/* HTML OUTPUT SEGÚN CANTIDAD DE SECCIONES Y PRODUCTOS */

function renderMenu() {
    const container = document.querySelector('.container');
    Object.keys(menuData).forEach(section => {
        const sectionData = menuData[section];
        let sectionHTML = `<h2 class="section-title" onclick="toggleSection('carta-${section}', this.querySelector('.toggle-symbol'))">
            <span class="toggle-symbol">-</span> <span data-translate="${section}">SECCIÓN</span>
        </h2>
        <div class="menu-section" id="carta-${section}">`;

        sectionData.forEach(item => {
            sectionHTML += `<div class="menu-item">
                <span class="item-name" data-translate="producto_${item.id}">${item.name}</span>
                <span class="item-description" data-translate="descripcion_${item.id}">${item.description}</span>
                <span class="item-price">${item.price}</span>
            </div>`;
        });

        sectionHTML += `<div class="section-footer" data-translate="nota_${section}">${menuData[section]}</div>`;
        container.innerHTML += sectionHTML;
    });
}

document.addEventListener('DOMContentLoaded', renderMenu);


/* FUNCIONALIDAD PARA EXHIBIR IDIOMA */

function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.dataset.translate;
        el.textContent = translations[language][key] || el.textContent;
    });

    // ON/OFF para botón seleccionado (idiogitma) seleccionado
    
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