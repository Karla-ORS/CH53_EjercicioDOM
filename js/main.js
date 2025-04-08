// Es el punto de inicio para abrir los documentos de html
let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas= document.getElementsByTagName("ul"); 

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");//primero

let otrosElementos = document.querySelectorAll("ul>li");


console.log(otrosElementos.length);

console.log("otroElemento", otroElemento);


console.log(listas.length); //10
//console.log(listas[0]);
console.log(listas.item(1));

console.log(elementos.item(2));


console.log(elementos.length);//10
let contador = 0;
function modifica (){
   //encabezado1.innerHTML = "<em>Ejercicios<em/> DOM";
   encabezado1.innerText = "<em>Ejercicio DOM</em>";
   encabezado2.innerText = ++contador; 
} //modifica


//encabezado1.innerText = "Ejercicio DOM"; //<------ Modificar


encabezado2.innerText = "DOM Exercise"

//console.log(encabezado1.innerText);

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto
    

    console.log("boton btnModificar presionado");

});





