// Clase ABSTRACTA Maquina de Cafe.
class MaquinaDeCafe {

    //Previene la instancia de una clase Abstracta.
    constructor(){
        if (new.target === MaquinaDeCafe) {
            throw new Error ('No se puede instanciar la clase Maquina de Cafe por que es Abstracta');
        };
    };

    //Metodos Abstractos
    seleccionarBebida(){
        throw new Error ('Este metodo debe ser implementado'); //Obliga a hacer OVERRIDE si o si.
    }

    prepararBebida(){
        console.log('Preparando el vaso de cafe')
    }

    servirBebida(){
        console.log('Sirviendo el cafe dentro del vaso')
    }

    //Metodo Publico que va a definir el comportamiento y el flujo general (Abstraccion)
    hacerCafe(){
        this.seleccionarBebida()
        this.prepararBebida()
        this.servirBebida()
    }
}


class ExpressoMachine extends MaquinaDeCafe {

    //Sobre Escribimos o OVERRRIDE al metodo abstracto
    seleccionarBebida(){
        console.log('Has seleccionado un Expresso');
    }
}

class CappuccinoMachine extends MaquinaDeCafe {

    //Sobre Escribimos o OVERRRIDE al metodo abstracto
    seleccionarBebida(){
        console.log('Has seleccionado un Cappuccino');
    }

    prepararBebida(){
        console.log('Realizando espuma...'); //Modifica el metodo abstracto
        super.prepararBebida(); //Llama al padre para asegurar una ejecucion correcta del metodo abstracto original tambien..
    }

}

const expresso = new ExpressoMachine();
const cappuccino = new CappuccinoMachine();

expresso.hacerCafe();
console.log('////////////////////////////SEPARAR////////////////////////////')
cappuccino.hacerCafe();