const form=document.querySelector('form')
const okMens= document.getElementById('--ok-mesaje')

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    //El mensaje esta oculto esto lo muestra 
    okMens.style.display = 'block';

   //El mensaje desaparece después de30 segundos
    setTimeout(function() {
        okMens.style.display = 'none';
    }, 30000); 
});

