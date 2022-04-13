

window.addEventListener("load", function(){

    class Persona{
        constructor(nombre, edad, estatura){
            this.nombre=nombre;
            this.edad = edad;
        }

        existir(){
            return 'persona que tiene un nombre: ' + this.nombre +' y su edad es: ' + this.edad;
        }
    }

    class Empleado extends Persona{
        constructor(nombre, edad, sueldo){

            super(nombre, edad);

            this.sueldo= sueldo;
        }

        trabajar(){
            return this.existir() + ' sueldo: ' + this.sueldo;
        }
    }
    let  miEmpleado = new Empleado('carlos', 34, 55000);

    document.getElementById('mensaje').innerHTML= miEmpleado.trabajar();
});