class Calculadora{
    constructor(numero1,numero2){
        this.numero1=numero1;
        this.numero2=numero2;
    }
}

class Operacion extends Calculadora{
    constructor(numero1,numero2,suma,resta,multiplicacion,division){
        this.suma=numero1+numero2;
        this.resta=numero1-numero2;
        this.multiplicacion=numero1*numero2;
        this.division=numero1/numero2;
    }   
}
/** */
class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    potencia(num1, num2) {
        return num1 ^ num2;
    }

    raiz(numero1) {
        return Math.sqrt(num1);
    }
} 
