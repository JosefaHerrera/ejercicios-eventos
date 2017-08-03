//Desde el JS
var boton = document.getElementById('demo');
boton.addEventListener('click', function() {
    console.log('hiciste click en el botón');
    this.innerHTML = '<strong>' + '¡HOLA MUNDO!' + '<strong>';
});
//onload desde el HTML
function onLoadBody() {
    alert('La página esta cargada');
};
//onmouseout desde el HTML
function mouseOut() {
    alert('No estás sobre mi');
}
//onmouseover desde el HTML
function mouseOver() {
    alert('Estás sobre mi');
}
