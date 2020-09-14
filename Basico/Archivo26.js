export default class Mascota{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    desplegar(){
        console.log(this.nombre+" tiene "+this.edad+ " años");
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }
}