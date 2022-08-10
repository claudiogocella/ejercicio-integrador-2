let parrafo = document.getElementById("resultado");
let boton = document.getElementById("boton");
let input = document.getElementById(entrada); 
let descuento : string = "MICODIGO"

function mostrarResultado() {
  let result : string input.value;  //acá tomo el resultado del input
  //entonces pregunto: = esta es la lógica para preguntar si el precio es mayor a $2500
 // if (result >2500) {
  if (result === descuento) {
    parrafo?.innerHTML = "Usted tiene descuento";  
  } else {
    parrafo?.innerHTML = "El código es incorrecto";
    }
} 

/* if (sumaTotal >= 1000 && total < 2000) {
  console.log("Con su compra, usted esta participando por un TV Led");
} else if (sumaTotal >= 2000 && total < 3000) {
  console.log("Con su compra, usted esta participando por una Moto 0Km"); */ 
//agregar evento al botón click:
boton?.addEventListener("click", mostrarResultado);








/* DE ESTA NOTICIA SE PUEDE DESPRENDER EL LINK PARA CARRITO COMPRAS
https://www.clarin.com/sociedad/dormir-desayunar-falso-dilema-moderno-atenta-salud_0_fK2LlnVXMc.html
*/

/* https://gastronomiaycia.republica.com/2022/08/01/nueva-etiqueta-alimentaria-que-mide-la-temperatura-y-el-tiempo/ */  