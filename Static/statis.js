//El modificador statis se utiliza para que la propiedad y metodos sean de la CLASE y no de las instancias

//Que significa? Que vamos a poder acceder directo a ellas sin instanciar.


class Calculadora {
    

    //Metodo
    sumar(a, b) {
        return a +b 
    };

    //Metodo Estatico

    static sumar(a, b) {
        return a + b;
    }
}

//const calculadora = new Calculadora();

console.log(Calculadora.sumar(2,3))


