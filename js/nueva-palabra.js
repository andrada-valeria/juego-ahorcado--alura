var btnAgregar = document.getElementById("btn-nueva-palabra");
var palabraNueva = document.getElementById("nueva-palabra");



btnAgregar.onclick = agregar;


function agregar(){
    palabrasSecretas = ["PASADO", "ARBOL", "CUADRO", "SALMON", "VIDA", "AUDIO"];
    palabrasSecretas[palabrasSecretas.length] = palabraNueva.value.toUpperCase();
    localStorage.setItem("palabrasSecretas", JSON.stringify(palabrasSecretas));
    palabrasSecretas = JSON.parse(localStorage.getItem("palabrasSecretas"));
    console.log(palabrasSecretas);
    alert("agrego palabra con exito");
}

