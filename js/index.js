var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


function onclick_alert(){
    var firstname = document.getElementById('nombre_txt').value;
    var lastname = document.getElementById('telefono_txt').value;
    var pedido   = document.getElementById('exampleFormControlTextarea1').value;

    if(firstname.length == 0 || lastname.length == 0 || pedido.length == 0 ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Completa los datos para realizar tu pedido!'
          });
    }else{
        Swal.fire({
            title: '¡Dulce Pedido Registrado!',
            text: 'En NO menos de 5 minutos nos comunicamos contigo, ¡O tu pedido es gratis!',
            imageUrl: 'https://images.pexels.com/photos/1028431/pexels-photo-1028431.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1028431.jpg&fm=jpg/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    
}