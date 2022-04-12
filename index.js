
// const objetoPersona = new Object();

// objetoPersona.nombre = 'pepe';
// objetoPersona.edad = 55;
// objetoPersona.calcularSalario() {
//     console.log('')
// }

// const objetoPersona2 = new Object();

// objetoPersona2.nombre = 'pepe';
// objetoPersona.edad = 55;
// objetoPersona2.salario = 545445;

// const objetoPersona3 = new Object();

// objetoPersona3.nombre = 'pepe';
// objetoPersona3.edad = 55;

// const miArray =[]
// console.log(miArray);
// function Persona(nombre, edad, sueldo){
//     //atributos
//     this.nombre = nombre;
//     this.edad = edad;
//     this.sueldo = sueldo;

   
// }

 //metodos
//  Persona.prototype.hablar= function(algo){
//     console.log('====================================');
//     console.log('persona que habla-->', algo);
//     console.log('====================================');
// }

// Persona.prototype.caminar= function(){
//     console.log('====================================');
//     console.log('persona que camina-->');
//     console.log('====================================');
// }


//  const persona1= new Persona('carol', 55, 55000);
//  console.log(persona1);

    /**
     * accedemos al metodo caminar
     */
    // persona1.caminar()
//  console.log(persona1);

// const persona2= new Persona('carol', 55);
//  console.log(persona2);


//  persona1.hablar('esto es un dato que envio atraves de una funcion');


//  console.log(persona1);
// function Animal(nombreAnimal, edadAnimal){
//     this.edadAnimal = nombreAnimal;
//     this.edadAnimal = edadAnimal;
// }

// function Autos(nombre, marca, anio, calificacion) {
//     this.nombre = nombre;
//     this.marca = marca;
//     this.anio = anio;
//     this.calificacion = calificacion;
    
// }

function nombre (dato1, dato2){
    console.log('esta funcion suma');
    const suma = 5+8;
}
nombre()
/**
 * clases
 */
class Persona  {
    /**
     * el constructor es un metodo que se ejecuta aumtomaticamente 
     * al momento de crear una instancia de nuestra clase
     */

    constructor(nombre, genero, edad){
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
    }

    // Metodos
    hablar(){
        console.log('una persona que habla');
    }

    correr(distancia){
        console.log('una persona que corre una distancia de: ', distancia);

    }

}

const persona = new Persona('pepito', 'masculino', 55);
console
persona.hablar()
persona.correr('5km');