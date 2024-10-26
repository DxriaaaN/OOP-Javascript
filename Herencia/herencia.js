class Animal {
    constructor(nombre, sonido){
        this.nombre = nombre;
        this.sonido = sonido;
    };

    hacerSonido(){
        console.log(`${this.nombre} hace: ${this.sonido}`);
    };
};

class Perro extends Animal {
    constructor(nombre){
        //La palabra reservada Super, hace referencia al llamado del constructor del padre del que hereda.
        super(nombre, 'Guau');

    };

    moverCola(){
        console.log(`${this.nombre} esta moviendo la cola felizmente`);
    };
};

class Gato extends Animal {
    constructor (nombre) {
        super(nombre, 'Miau');
    };

    ronronear(){
        console.log(`${this.nombre} esta ronroneando contento.`)
    };
};

const perrito = new Perro('Manchita');
const gatito = new Gato('Pelusa');

//Hacer sonido es usable en ambos, por ser heredados de Animal (Clase Padre.)

perrito.hacerSonido();
perrito.moverCola();

gatito.hacerSonido();
gatito.ronronear();


