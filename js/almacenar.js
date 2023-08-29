document.addEventListener('DOMContentLoaded', function(){
const agregar = document.getElementById("agregar");
const limpiar = document.getElementById("limpiar");
const input = document.getElementById("item");
const contenedor = document.getElementById("contenedor");


agregar.addEventListener("click", function(){


        let texto = input.value;

        window.localStorage.setItem('texto', texto);

        let textoGuardado = window.localStorage.getItem('texto');

        contenedor.innerHTML += `<li>${textoGuardado}</li>`;
        
        input.value = "";

})


limpiar.addEventListener("click", function(){
    const lis = document.querySelectorAll(`li`);
    for (let li of lis) {
      contenedor.removeChild(li);
    }
    localStorage.clear();

})

window.addEventListener("beforeunload", function(){
    localStorage.setItem('contenedor', contenedor.innerHTML);
});

window.addEventListener("load", function(){
    contenedor.innerHTML = localStorage.getItem('contenedor');
});




});