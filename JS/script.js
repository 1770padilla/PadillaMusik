//document.querySelectorAll () cuando hay mas de un elemento con la misma clase.   document.querySelector

//querySelectorAll (anima todos los class con el mismo nombre)

const parallax = document.querySelector('.parallax');
const tl = new TimelineMax();

//Sintaxis: (elemento a animar, duración de animacion, {inicio animación, fin animación, posicion en el timeline})

tl.fromTo(parallax, 2, {width:"0%"},{width:"100%", ease:Power2.easeInOut});




const parallax1 = document.querySelector('.parallax1');
const tl1 = new TimelineMax();

//Sintaxis: (elemento a animar, duración de animacion, {inicio animación, fin animación, posicion en el timeline})

tl1.fromTo(parallax1, 4, {width:"0%"},{width:"100%", ease:Bounce.easeInOut});




const logo = document.querySelector('.logo');
const t2 = new TimelineMax();

//Sintaxis: (elemento a animar, duración de animacion, {inicio animación, fin animación, posicion en el timeline})

t2.fromTo(logo, 4, {opacity:"0%"},{opacity:"100%", ease:Power2.easeInOut});




