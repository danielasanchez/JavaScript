import Mascotita from './Archivo26.js'

class Perro extends Mascotita{
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