import { Player } from "../shared/players.model";

export class Team{
    
    
    constructor( public name:string, public description:string,public logo:any, public players:Player[]){
        this.name=name;
        this.description=description;
        this.logo=logo;
        this.players =players
    }
}