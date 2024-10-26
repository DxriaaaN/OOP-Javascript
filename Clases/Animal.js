//Clase: Es una Plantilla 
class Animal {

    //Constructor : Metodo especial que permite instanciar objetos, basandose en la plantilla que es la clase.
    constructor(nombre, edad, especie, sonido) {
        //Propiedad o Caracteristica.

        //This hace referencia a la persona que estamos instanciando.
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.sonido = sonido;
    }   

    //Metodo: Es una funcion que representa un comportamiento propio de esta clase
    
    hacerSonido(){
        console.log(this.sonido);
    }

    decirNombre(){
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }

}

const manchita = new Animal('Manchita', 1, 'Perro', 'Guau');
const pelusa = new Animal('Pelusa', 2, 'Gato', 'Miau');

pelusa.hacerSonido();

pelusa.decirNombre();



manchita.hacerSonido();

manchita.decirNombre();