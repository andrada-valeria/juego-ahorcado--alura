var btnNuevaPalabra = document.getElementById("nueva_palabra");
eventoTecla = document.addEventListener("keydown", letraEscritas);
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var popupContainer = document.getElementById("popup-container");
var btnPopup = document.getElementById("btn-popup");
var btnMeRindo = document.getElementById("me_rindo");
var letrasColor= "white";



/* Local storage */
palabrasSecretas = ["ALURA", "BORDE", "AZUL", "GRIS", "SABIO", "AUTO", "VACIO", "ORACLE", "JUGAR",
"ASTRO", "HIELO", "SABOR", "OSO","TAMBOR","ZAPATO"];
localStorage.setItem("palabrasSecretas", JSON.stringify(palabrasSecretas)); 
palabrasSecretasAlmacenadas = JSON.parse(localStorage.getItem("palabrasSecretas"));



/* variables globales */
tamanhoArreglo = palabrasSecretas.length - 1;
numeroAleatorio = Math.round(Math.random()*tamanhoArreglo);
contador = 0;
contadorHorca = 0;
puntos = 0;
letraDibujada = [];

/* Acciones de botones */
btnNuevaPalabra.onclick = recargarPagina;
btnMeRindo.onclick = Larendicion;



/* Deja pasar solo letras */
function letraEscritas(evento){
     console.log("letra escrita"); 
    var letraEscrita = evento.key;
    if (evento.keyCode >= 65 && evento.keyCode <= 90){
        
        if(letraDibujada.includes(letraEscrita.toUpperCase())){
           
        }else{
            palabraCorrecta(letraEscrita.toUpperCase());
            letraDibujada.push(letraEscrita.toUpperCase());
        }
        
    }
    
}

/* Recargo la pagina para seleccionar una nueva palabra*/
function recargarPagina(){
    location.reload();      
}

/*  guiones  */
function dibujarGuion(){
      
    var numeroDeLetras = palabrasSecretas[numeroAleatorio];
    console.log(numeroDeLetras);
    for (var i = 1; i < numeroDeLetras.length+1; i++){
        
        var x = 30 * i;
        console.log(x);
        pincel.strokeStyle = "#f1f0e8";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(x, 400); 
        pincel.lineTo((x+20), 400); 
        pincel.stroke();
    }

} 

dibujarGuion();

/* Funcion para dibujar letra */
function dibujarLetra(l, x){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#f1f0e8";
    pincel.font = "30px arial";
    pincel.fillText(l, x, 395);
}

/* Funcion para dibujar letra equivocada */
function dibujarLetraEquivocada(l, x){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#f1f0e8";
    pincel.font = "20px arial";
    pincel.fillText(l, x, 450);
}

/* Funcion para dibujar la letra correcta */
function palabraCorrecta(l){
    var palabraSeleccionada = palabrasSecretasAlmacenadas[numeroAleatorio];
    /* console.log("dibujando letra") */
    var esLetra = false;
    
    for (var i = 0; i<palabraSeleccionada.length; i++){
        if(l === palabraSeleccionada[i]){
            var esLetra = true;
            if (i === 0){
                dibujarLetra(palabraSeleccionada[i], 30);
                puntos = puntos + 1;            
            } 
            if (i === 1){
                dibujarLetra(palabraSeleccionada[i], 60);
                puntos = puntos + 1;    
            } 
            if (i === 2){
                dibujarLetra(palabraSeleccionada[i], 90);
                puntos = puntos + 1;    
            } 
            if (i === 3){
                dibujarLetra(palabraSeleccionada[i], 120);
                puntos = puntos + 1;    
            } 
            if (i === 4){
                dibujarLetra(palabraSeleccionada[i], 150);
                puntos = puntos + 1;    
            } 
            if (i === 5){
                dibujarLetra(palabraSeleccionada[i], 180);
                puntos = puntos + 1;    
            } 

            if (i === 6){
                dibujarLetra(palabraSeleccionada[i], 210);
                puntos = puntos + 1;    
            } 

        }
    }
     
    if (esLetra == false){
        /* console.log("letra incorrecta"); */
        palabraIncorrecta(l);
    }
    console.log(puntos);
    console.log(palabraSeleccionada);
    /*GaNO GaNo*/
    if(puntos == palabraSeleccionada.length){

        gano();
       showGanador();
             
    }

}

/* Dibujar la palabra incorrecta */
function palabraIncorrecta(l){
    
    contador = contador + 20;
    dibujarLetraEquivocada(l, contador);
    dibujarHorca();
}

/* Funcion que dibuja la horca cada vez que no acertan una letra */
function dibujarHorca(){

    contadorHorca = contadorHorca + 1;
  
/* Horca */

    if (contadorHorca === 1){
      
        pincel.strokeStyle = "#f1f0e8";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
       pincel.moveTo(30, 350); /* pocisionar el pincel */
      pincel.lineTo(300, 350); /* dibujar la linea */
        pincel.moveTo(50, 350); /* pocisionar el pincel */
      pincel.lineTo(50, 50); /* dibujar la linea */
        pincel.lineTo(150, 50); /* dibujar la linea */
        pincel.lineTo(150, 80); /* dibujar la linea */
        pincel.stroke();
    } 
/* Cabeza */
    if(contadorHorca === 2){
        pincel.fillStyle = "#f1f0e8";
        pincel.beginPath(); /* comenzar camino */
        pincel.arc(150,110,30,0,2*3.14);
        pincel.fill();
    }
/* Tronco */
    if(contadorHorca === 3){
        pincel.strokeStyle = "#f1f0e8";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 110);
        pincel.lineTo(150,230);
        pincel.stroke();
    }
/* Pierna izquierda */
    if(contadorHorca === 4){
        pincel.strokeStyle = "#f1f0e8";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 230);
        pincel.lineTo(120, 290);
        pincel.stroke();
    }
/* Pierna derecha */
    if(contadorHorca === 5){
        pincel.strokeStyle = "#f1f0e8";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 230);
        pincel.lineTo(170, 290);
        pincel.stroke();
    }
/* Brazo izquierdo */
    if(contadorHorca === 6){
        pincel.strokeStyle = "#f1f0e8";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 140);
        pincel.lineTo(120, 190);
        pincel.stroke();
    }
/* Brazo derecho */
    if(contadorHorca === 7){
        pincel.strokeStyle = "#f1f0e8";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 140);
        pincel.lineTo(175, 190);
        pincel.stroke();


      perdio();
      
        /*        
        showElem();
        alert("No pudiste salvar a Juancito");
       palabraCorrecta();*/
    }
}


function perdio(){
    var imgPierde = new Image();
    imgPierde.src = "img/unnamed.png";
    imgPierde.onload = function(){
        pincel.drawImage(imgPierde, 92,42);
      }
}

function gano(){
    var imgGana = new Image();
    imgGana.src = "img/contente.gif";
    pincel.beginPath();
    imgGana.onload = function(){
        pincel.drawImage(imgGana, 150,150);
      }
}


function Larendicion(){

    for (var i = 0; i<=7; i++){
        setTimeout(function(){dibujarHorca()},500);
  
    }


    alert("Perdiste");
   
}

/*Mostrar imagenes ocultas*/
function showElem() {
    document.getElementById("myImg").style.visibility = "visible"; 
    alert(palabraSeleccionada);
  }

  function showGanador() {
    document.getElementById("myImg2").style.visibility = "visible"; 
  
   
}

  /*Funcion para dibujar en canvas ubicacion si gana */
   function showImgCanvas(){
    pincel.drawImage(img, 50, 100);
  }