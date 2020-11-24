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
  var activeImg = $('.images img.active');
  var activeCircle = $('.nav i.active');
}

// Funzione next element
function nextImges() {
   var activeImg = $('.images img.active');
   console.log(activeImg);
   var activeCircle = $('.nav i.active');

   activeImg.removeClass(".active");
   // activeImg.next().addClass('.active');

}
