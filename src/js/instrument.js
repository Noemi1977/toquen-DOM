document.getElementById("burger-menu").addEventListener("click", function () {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");


    this.classList.toggle("active");
});
// Aqui va el codigo del instrumento
// Función parámetro instrumento - URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Obtener el parámetro 'instrumento'
  const instrumentoParam = getQueryParam('instrumento');
  if (instrumentoParam) {
    // Cambios de título (h1) con el nombre del instrumento
    const titulo = document.querySelector('.construccion h1');
    titulo.textContent = decodeURIComponent(instrumentoParam);
    
    // Actualizar el atributo alt de la imagen
    const imagen = document.querySelector('.ilustracion img');
    imagen.alt = `${decodeURIComponent(instrumentoParam)} en construcción`;
    
    // SRC Cambio de ilustración según el instrumento
    switch (instrumentoParam.toLowerCase()) {
      case 'guitarra':
        imagen.src = "../public/image/PH-GUITARRA.png";
        break;
      case 'acordeon':
        imagen.src = "../public/image/PH-ACORDEON.png";
        break;
      case 'tambor':
        imagen.src = "../public/image/PH-TAMBOR.png";
        break;
      default:
        // Asignar una imagen por defecto ¿?
        imagen.src = "../public/image/PLACEHOLDER-default.png";
        break;
    }
  }