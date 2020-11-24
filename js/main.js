$(document).ready(
  function () {

 // Freccia verso sinistra
    $('.prev').click(
      function () {
        prevImges();
      }
    );
  // Freccia verso destra
    $('.next').click(
      function () {
        nextImges();
      }
    );
  }
);


// FUNZIONI---------------------------------------------------------
// Funzione elemento precedente
function prevImges() {
  // variabili active img e circle
  var activeImg = $('.images img.active');
  var activeCircle = $('.nav i.active');

  // rimuovere la classe active
  activeImg.removeClass("active");
  activeCircle.removeClass("active");

  // spostare la classe active nell'elemento precedente e giunto al primo elemento ritornare all'ultimo
  if (activeImg.hasClass('first') == true) {
    $('.images img.last').addClass('active')
    $('.nav i.last').addClass('active')
  } else {
    activeImg.prev().addClass('active');
    activeCircle.prev().addClass('active');
  }
}

// Funzione next element
function nextImges() {
  // variabili active img e circle
   var activeImg = $('.images img.active');
   var activeCircle = $('.nav i.active');

   // rimuovere la classe active
   activeImg.removeClass('active');
   activeCircle.removeClass('active');

   // spostare la classe active nell'elemento successivo e giunto all'ultimo ritornare al primo elemento
   if (activeImg.hasClass('last') == true) {
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
   } else {
     activeImg.next().addClass('active');
     activeCircle.next().addClass('active');
   }
}
