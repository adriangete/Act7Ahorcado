
var palabra = document.getElementById("palabraAdivinar");
var letra= document.getElementById("letraBuscar"); 
var aciertos= document.getElementById("aciertos");
var guiones
var fallos= document.getElementById("fallos");
var encontrarGuiones;

var anteriores ="";

palabra.addEventListener("blur", crearGuiones, false );
aciertos.addEventListener("blur", crearGuiones, false )
letra.addEventListener("keyup", buscarCaracter, false );

function crearGuiones(){
    guiones=palabra.value;
    guiones=guiones.replace(/[a-z]/gi,"-");
    aciertos.value=guiones;

}

function buscarCaracter(){
    if(letra==""){
        return
    }
    ;
    var palabraA =palabra.value.toUpperCase();
    var caracterBuscar=letra.value.toUpperCase();
    var posicion=palabraA.indexOf(caracterBuscar,0);
    var es_acierto=false;

    while(posicion > -1){
        guiones=guiones.substring(0,posicion) 
        +caracterBuscar 
        +guiones.substr(posicion+1,guiones.length);

        console.log(caracterBuscar);

        aciertos.value=guiones;

        posicion= palabraA.indexOf(caracterBuscar,posicion +1);
        es_acierto=true;
    }
  
    if(es_acierto==false){
    // alert(caracterBuscar)
        console.log(caracterBuscar);
        anteriores=anteriores+caracterBuscar;
        fallos.innerHTML =anteriores;
    // fallos.innerHTML =fallos.innerHTML+caracterBuscar;
    }
    encontrarGuiones=guiones.indexOf("-",0);

    if (encontrarGuiones>-1){
            
    }else{
        victoria();
    }
    letra.value="";
}

function victoria(){
    alert("HAS GANADO!!!");
    palabra.value="";
    letra.value="";
    guiones.value="";
    aciertos.value="";
    fallos.value="";
    fallos.innerHTML = "";
}