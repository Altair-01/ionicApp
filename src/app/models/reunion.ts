export class Reunion {
    id:number;
    ordreJour:string;
    heureDebut?:Date;
    heureFin?:Date;

    constructor(id:number,ordreJour:string,heureDebut?:Date,heureFin?:Date){
        this.id=id;
        this.ordreJour=ordreJour;
        this.heureDebut=heureDebut;
        this.heureFin=heureFin;
    }
}
