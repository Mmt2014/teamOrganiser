import { EventEmitter } from "@angular/core";
import { Player} from "../players.model"

export class PlayerService{
    players:Player[]=[new Player('John','Batting'),new Player('Smit','Bowling')]
     playersChanged:EventEmitter<any> = new EventEmitter()
    getPlayers(){
        return this.players.slice();
    }
    addplayer(newPlayer:Player){
        this.players.push(newPlayer)
        this.playersChanged.emit(this.players.slice())
    }
    addPlayersFromTeam(players:Player[]){
        
      this.players.push(...players);
      this.playersChanged.emit(this.playersChanged)
    }
}