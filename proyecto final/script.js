
let compra, salir='si';
while(compra!= salir){
    compra=prompt('¿Desea realizar una compra?');
  }
//Declaro variables de las primeras preguntas(NOMBRE,ID,MATE,SOC,FIS,TIPO DE CLIENTE,Cantidad(cantLib); e imprimo (nombre,cantidad de libros)//
let cantLibm= parseInt;
let cantLibf= parseInt;
let cantLibs= parseInt;

let nombre=prompt('Escriba su nombre');
console.log('Nombre del comprador ='+ nombre);
let id=prompt('Escriba su ID');

let tipoC=prompt( '¿Que tipo de cliente es?');
//Preguntas y cantidad de cada materia//
let mate=prompt('¿Desea comprar libros de Matemática?');
if (mate=='si'){
    cantLibm= prompt('¿Cuántos libros desea adquirir?');
    console.log('Libros de Matemática a comprar =' + cantLibm);
}else{
    (mate=='no')       
}
let soc= prompt('¿Desea comprar libros de Estudios Sociales?'); 

if (soc=='si'){
    cantLibs= prompt('¿Cuántos libros desea adquirir?');
    console.log('Libros de Estudios Sociales a comprar =' + cantLibs);
}else{
    (soc=='no')     
}
let fis= prompt('¿Desea comprar libros de Física?');  
if(fis=='si'){
    cantLibf=prompt('¿Cuántos libros desea adquirir?');
    console.log('Libros de Física a comprar =' + cantLibf);
}else{
    (fis=='no')
    console.log(cantLibf);
}

//Declaro precios por cada materia//

let mp = 2000;
let fp = 4000;
let sp = 5000;
//Declaro e imprimo descuento,subtotal,total)//
let desc = [0.30,0.20,0.10];
let dCliente = desc [tipoC -1];


let totalm = cantLibm * mp;
let totals = cantLibs * sp;
let totalf = cantLibf * fp;



let subtotal= totalm + totals + totalf;
let descuento = subtotal * dCliente;
let total= subtotal - descuento;


console.log('Subtotal sin descuento =' + subtotal);

 
console.log('Descuento aplicado =' + descuento);
console.log('Total a pagar =' + total);

//Cerrar compra//
let ncompra= prompt('¿Desea realizar otra compra? En caso de que no, digite "q"')

if(ncompra=='si'){
    mate
}else{
    (ncompra=='no')
}


