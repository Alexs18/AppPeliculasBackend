class Personas{
    constructor(cedula, nombre, edad, sexo){
        this.cedula = cedula;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo
    }

    Saludar(){
        console.log('saludando a ' + this.nombre)
    }
    MiNombre(){
        console.log('saludando a ' + this.nombre, 'con edad' + this.edad, 'el es' + this.sexo)
    }

}

const Pablo = new Personas(132625242, 'Pablo', 27, 'Hombre');
console.log(Pablo.nombre);
Pablo.MiNombre()

const Maria = new Personas(132625242, 'Maria', 27, 'Mujer');
console.log(Maria.nombre);
Maria.MiNombre()


