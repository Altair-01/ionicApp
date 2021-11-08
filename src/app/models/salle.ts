import { Reunion } from "./reunion";

export class Salle {
    idSalle:number;
    reunions?:Reunion[];

    constructor(idSalle:number,reunions:Reunion[]){
        this.idSalle=idSalle;
        this.reunions=reunions;
    }
}
