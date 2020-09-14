class Mascota{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    desplegar(){
        console.log("El nombre de la mascota es "+this.nombre+" y tiene "+this.edad+ " años");
        console.log(`El nombre de la mascota es ${this.nombre} y tiene ${this.edad} años`);
    }
}

class Perro extends Mascota{
    constructor(nombre,edad,raza)
    {
        super(nombre,edad);
        this.raza=raza;
    }
    desplegar(){
        const {nombre,edad,raza}=this;
        console.log(nombre+" tiene "+edad+" años y es un "+raza);
        console.log(`${nombre} tiene ${edad} años y es un ${raza}`);
    }
}
const perro1= new Perro("Whisky",8,"Chihuahua");

perro1.desplegar();