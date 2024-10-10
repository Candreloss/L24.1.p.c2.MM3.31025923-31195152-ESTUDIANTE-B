export default class CL_estudiante {
    constructor(nombre, notas, materias){
        this._nombre = nombre;
        this._notas = notas;
        this._materias = materias;
    }

set nombre(nom){
    this._nombre = nom;
}

get nombre(){
    return this._nombre;                
}

set materias(m){
    this._materias = +m;
}

get materias(){
    return this._materias;
}


set notas(n){
    this._notas = +n;
}    

get notas(){ 
    return this._notas;
}

promNotas(){
    return this._notas/this._materias;
}

}