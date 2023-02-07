import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Player} from "../players.model"

export class PlayerService{
    players:Player[]=[new Player('John','Batting'),new Player('Smit','Bowling')]
     playersChanged:Subject<any> = new Subject()//here we use subject instead of event emitter
    getPlayers(){
        return this.players.slice();
    }
    addplayer(newPlayer:Player){
        this.players.push(newPlayer)
        this.playersChanged.next(this.players.slice())
    }
    addPlayersFromTeam(players:Player[]){
        
      this.players.push(...players);
      this.playersChanged.next(this.playersChanged)
    }
}