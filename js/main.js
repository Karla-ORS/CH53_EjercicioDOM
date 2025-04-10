// Es el punto de inicio para abrir los documentos de html
let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul"); 
let txtRFC = document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");
let txtCURP = document.getElementById("txtCURP");


let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");//primero

let otrosElementos = document.querySelectorAll("ul>li");


console.log(otrosElementos.length);

console.log("otroElemento", otroElemento);

console.log("boton btnModificar presionado");


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
    

    let element = document.createElement("li");
    element.innerText = "Another item"; //<li>Another item</li>
    element.classList.add("list-group-item");

    let element2 =element.cloneNode(true);

//before Inserta el elemento antes de la lista 
    //listas.item(0).before(element);

//prepend Inserta el elemento al principio de la lista 
    //listas.item(0).prepend(element2);

// append Inserta el elento al final de la lista
  //listas.item(0).append(element);
    
//after Inserta el elemento despues de la lista 
    //listas.item(0).after(element2);
    

//Afterbegin Inserta el elemento al principio de la lista 
    //listas.item(1).insertAdjacentElement("afterbegin", element);
//Beforeed Inserta el elento al final de la lista
    //listas.item(1).insertAdjacentElement("beforeend", element2);


    //listas.item(1).insertAdjacentHTML("beforebegin", `<li class ="list-group-item"> Before Begin item</li>`);

    //listas.item(1).insertAdjacentHTML("afterend", `<li class ="list-group-item">Another new item</li>`);

    //listas.item(1).insertAdjacentHTML("afterbegin", `<li class ="list-group-item">Another new item</li>`);

    //listas.item(1).insertAdjacentHTML("beforeed", `<li class ="list-group-item"> Before Begin item</li>`);

});
// Se ejecuta cuando termina de cargar todos los elementos de la pagina
window.addEventListener("load",function(event){
    console.log("se termino de cargar la pagina");

}); //load
 
///////////////////////////////////////////////////////////////////////////////////////////

//FORMA MAS COMPLETA SIN AUTOMATIZACION

//Blur ----> cuando se sale del campo (perder el foco)
//txtRFC.addEventListener("blur", function (event){
  //  event.preventDefault();
    //txtRFC.value = txtRFC.value.toUpperCase();  // ---> toUpperCase --->Conversion en mayusculas aplicado en el mismo campo 
    //}); //txtRFC

//txtCURP.addEventListener("blur", function (event){
  //  event.preventDefault();
    //txtCURP.value = txtCURP.value.toUpperCase();
//}); //CURP

//txtTelefono.addEventListener("blur", function (event){
  //  event.preventDefault();
    //txtTelefono.value = txtTelefono.value.trim (0, 10);
//}); // Telefono

/////////////////////////////////////////////////////////////////////////////////////////

//FORMA MAS AUTOMATIZADA CON MENOS CODIGO MISMA FUNCION

function txtToUpper(event){
    event.target.value =event.target.value.toUpperCase();
} //txtToUpper
txtRFC.addEventListener("blur",txtToUpper); //txtRFC
txtCURP.addEventListener("blur",txtToUpper); //txtCURP


//////////////////////////////////////////////////////////////////////////////////////// 




