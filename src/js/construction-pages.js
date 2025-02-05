// Función parámetro instrumento - URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  const titulo = document.querySelector('.construccion h1');
  const imagen = document.querySelector('.ilustracion img');
  if (titulo && imagen) {
      const instrumentoParam = getQueryParam('instrumento');
      if (instrumentoParam) {
          titulo.textContent = decodeURIComponent(instrumentoParam);
          imagen.alt = `${decodeURIComponent(instrumentoParam)} en construcción`;
          switch (instrumentoParam.toLowerCase()) {
              case 'guitarra':
                  imagen.src = "../public/image/PH-GUITARRA.png";
                  break;
              case 'acordeon':
                  imagen.src = "../public/image/PH-ACORDEON.png";
                  break;
              case 'bateria':
                  imagen.src = "../public/image/PH-TAMBOR.png";
                  break;
              default:
                  imagen.src = "../public/image/PLACEHOLDER-default.png";
                  break;
          }
      }
  }