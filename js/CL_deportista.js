import CL_estudiante from "./CL_estudiante.js";
export default class CL_deportista extends CL_estudiante {
    constructor(nombre, notas, materias, edad, deporte){  
        super(nombre, notas, materias);
        this._edad = edad;
        this._deporte = deporte;
    }

    set deporte(d){
        this._deporte = +d;
    }
    get deporte(){
        return this._deporte;
    }

    set edad(e){
        this._edad = +e;
    }
    get edad(){ 
        return this._edad;
    }

    equipoBeis(){
        if(this.promNotas()>=14 &&  this.edad>=21)
            return "fue admitido en beisbol";
        else
            return "no fue admitido en beisbol";

        }
        
    equipoFut(){
            if(this.promNotas()>=12 &&  this.edad>=19)
                return "fue admitido en futbol";
            else
                return "no fue admitido en futbol";
    
            }
    
    
admitido(){
    if(this.deporte==1)
        return this.equipoBeis();
    else
        return this.equipoFut();
}

    














































}




































