//ENCAPSULAMIENTO

//Clase: Es una Plantilla 
class Mascota {

    //ES2022 se agrego la posibilidad de hacer privadas las propiedades utilizando el # al comienzo del nombre.

    #nombre;
    #especie;
    #energia;
    #hambre;

    constructor(nombre, especie) {
        this.#nombre = nombre;
        this.#especie = especie;
        this.#energia = 100;
        this.#hambre = 0;
    }

    //GETTER (Obtener)
    obtenerNombre(){
        return this.#nombre
    };

    //SETTER (Establecer o configurar)
    establecerNombre(nombre){
        if (nombre.length > 1){
            this.#nombre = nombre
        }
        console.log('El nombre debe ser mayor a una letra.')
    };

    //Metodos
    jugar(){
        if (this.#energia > 0) {
            console.log(`${this.obtenerNombre()} esta jugando y divirtiendose`);
            this.#energia -= 20;
            this.#hambre +=10;
        } else {
            console.log(`${this.obtenerNombre()} esta demasiado cansado para jugar`);
        };
    }

    alimentar(){
        if(this.#hambre > 0) {
            console.log(`${this.obtenerNombre()} esta comiendo una deliciosa comida`);
            this.#hambre -=20;
            this.#energia = 10;
        } else {
            console.log(`${this.obtenerNombre()} no tiene hambre`);
        };
    }

    estado(){
        console.log(`${this.obtenerNombre()} es un ${this.#especie} tiene ${this.#energia} de energia y ${this.#hambre} de hambre.`)
    }
};


const manchita = new Mascota('Manchita', 'Perro');

manchita.estado();
manchita.jugar();
manchita.jugar();
manchita.alimentar();
manchita.jugar();
manchita.alimentar();
manchita.jugar();
manchita.estado();
