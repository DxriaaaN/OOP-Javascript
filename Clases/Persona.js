//Clase: Es una Plantilla 
class Persona {

    //Constructor : Metodo especial que permite instanciar objetos, basandose en la plantilla que es la clase.
    constructor(nombre, edad, profesion) {
        //Propiedad o Caracteristica.

        //This hace referencia a la persona que estamos instanciando.
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }   

    

}


//De esta forma estamos instanciando un objeto basado en la clase (Plantilla)
const carolina = new Persona('Carolina', 35, 'Astronauta');
const ricardo = new Persona ('Ricardo', 18, 'Estudiante de Programacion');

//Depuracion Persona 

//GET: Obtencion de datos
console.log(carolina.edad);
console.log(ricardo.profesion);

//SET: Cambiar la informacion desde afuera
carolina.edad= 45;
ricardo.profesion = 'Estudiante de Artes';

//GET: Obtencion de datos
console.log(carolina.edad);
console.log(ricardo.profesion);

