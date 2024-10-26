class Instrumento {
    constructor(nombre){
        //Propiedad o Caracteristica
        this.nombre = nombre;
    };

    //Metodo
    tocar(){
        console.log(`${this.nombre} Esta produciendo un sonido.`);
    };
};

class Guitarra extends Instrumento{
    constructor (){
        super('Guitarra');
    };

    //POLIMORFISMO: Es la capacidad de multiples clases a responder distinto a una misma funcion o metodo.

    //Sobreescribir o Pisar [OVERRIDE] el metodo heredado
    tocar(){
        console.log("\x1b[31m%s\x1b[0m", `La ${this.nombre} esta haciendo un solo impresionante!`)
    }
};

class Bateria extends Instrumento{
    constructor (){
        super('Bateria');
    };

    //POLIMORFISMO: Es la capacidad de multiples clases a responder distinto a una misma funcion o metodo.

    //Sobreescribir o Pisar [OVERRIDE] el metodo heredado
    tocar(){
        console.log("\x1b[32m%s\x1b[0m", `La ${this.nombre} esta tocando los tambores a un gran ritmo!`)
    }
};

class Piano extends Instrumento{
    constructor (){
        super('Piano');
    };

    //POLIMORFISMO: Es la capacidad de multiples clases a responder distinto a una misma funcion o metodo.

    //Sobreescribir o Pisar [OVERRIDE] el metodo heredado
    tocar(){
        console.log("\x1b[34m%s\x1b[0m", `La ${this.nombre} esta haciendo unas hermosas notas pentantonicas de blues!`)
    }
};


function show(instrumento) {
    instrumento.tocar();
};

const guitarra = new Guitarra();
const bateria = new Bateria();
const piano = new Piano();

show(guitarra);
show(bateria);
show(piano);

//Colores

//console.log("\x1b[31m%s\x1b[0m", 'Ejemplo Rojo')
//console.log("\x1b[32m%s\x1b[0m", 'Ejemplo Verde')
//console.log("\x1b[33m%s\x1b[0m", 'Ejemplo Amarillo')
//console.log("\x1b[34m%s\x1b[0m", 'Ejemplo Azul')
//console.log("\x1b[35m%s\x1b[0m", 'Ejemplo Magenta')
//console.log("\x1b[36m%s\x1b[0m", 'Ejemplo Cian')