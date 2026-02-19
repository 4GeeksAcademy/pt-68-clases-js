import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo");

  //////////////////////////////////////////////////////////////////////Array

  // index          0         1       2              
  // length = 3
  let alumnos = ["Carlos", "Lucas", "Maria"]


  //index = posicion de cada elemento = indice
  //length = longitud = tamaño 


  console.log(alumnos);
  console.log(alumnos[2]);
  console.log(alumnos.length);


  ////////////////////////////////////////////////////////////////Metodos para modificar Array
  // push() el que suma un valor al final del array
  alumnos.push("Diego");
  console.log(alumnos);

  //pop() saca el ultimo valor del array 
  alumnos.pop()
  console.log(alumnos);

  //unshift() agrega un valor al principio 
  alumnos.unshift("Carla")
  console.log(alumnos);


  //shift() elimina el primer valor del array 
  alumnos.shift()
  console.log(alumnos);

  //indexOf() busca un elemento y te dice el indice. si no existe, devuelve -1
  let posicion = alumnos.indexOf("Carlos");
  console.log(posicion);


  //includes() devuelve truo o false si el elemto existe en el array 
  let estaLucas = alumnos.includes("Lucas")
  console.log(estaLucas);

  // join()  convierte el array en un string 
  console.log(alumnos.join(" - "));

  //consultar todos los valores de mi array 
  console.log(alumnos[0]);
  console.log(alumnos[1]);
  console.log(alumnos[2]);


  /////////////////////////bucle for

  // for (inicializacion; condicion ; incremento) {
  //   codigo que se ejecuta en cada iteracion
  // }
  //                       2
  // let alumnos = ["Carlos", "Lucas", "Maria"]


  //ejemplo pasar lista de los alumnos:
  for (let index = 0; index < alumnos.length; index++) {

    console.log("Alumno presente: " + alumnos[index]);

  }
  ///ejemplo 2 
  let frutas = ["manzana", "naranja", "uva", "limon", "melon"]

  for (let i = 0; i < frutas.length; i++) {

    if (frutas[i] === "limon" || frutas[i] === "melon") {
      console.log(frutas[i] + "es");

    } else {

      console.log(frutas[i] + "s");
    }

  }
///////////////////////////////////////////////////////////////bucle for anidado 

//ejemplo 1: calendario 

let diasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
let semanasDelMes = 4

for (let index = 1; index <= semanasDelMes; index++) {
 let linea= `Semana ${index}: ` 

 for (let j = 0; j < diasDeLaSemana.length; j++) {
  linea += diasDeLaSemana[j] + " "
  
 }
console.log(linea);

}

///////////////////////////////////////////////////////////////////////// bucle while 

// while(condicion){
//   codigo a jecutar
// }

let contador = 0
while (contador < 10) {
  console.log(contador);
  contador++ //aumenta el contador para que la condicion se vuelva falsa eventualmente
}  














};



