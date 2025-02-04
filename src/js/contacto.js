//validaciones de formulario
// NOMBRE
const name= document.getElementById("name")

name.addEventListener("input", function() {
  const basicEstructure = /[^a-zA-Z]/
  if (basicEstructure.test(this.value)){
    this.setCustomValidity("Solo se permiten letras");
  }else{
    this.setCustomValidity("")
  }
})

// EMAIL
const email=document.getElementById("email")

email.addEventListener("input", function () {
  const basicEstructure = /^[^\s@]+@[^\s@]+\.[^\s@]+$/  //comprobamos que el email tiene una estructura básica 
  if (!basicEstructure.test(this.value)) { //comprobamos si el valor que se introduce no es válido y si no lo es se lo mostramos 
    this.setCustomValidity("Por favor, ingresa un correo válido.");
  } else {
    this.setCustomValidity("");
  }
});

// TELEFONO

const telephone= document.getElementById("telephone")

telephone.addEventListener("input", function(){
  const numberEstructure= /^[0-9]*$/
  if(!numberEstructuremberEstructure.test(this.value)){
    this.setCustomValidity("Solo se permiten numeros del 0 al 9")
  }else{
    this.setCustomValidity("")
  }
}



// BOTON ENVIAR

const form= document.querySelector(form)
console.log(form)
const okMens= document.getElementById('ok-mesaje')

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    //El mensaje esta oculto esto lo muestra 
    okMens.style.display = 'block';

   //El mensaje desaparece después de 30 segundos
    setTimeout(function() {
        okMens.style.display = 'none';
    }, 30000); 
});

