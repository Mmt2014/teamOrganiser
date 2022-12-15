import { Component, EventEmitter, Output } from '@angular/core';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent {
  newName:string ='';
  newKeyskill: any ='';
  //@Output() addedPlayer:EventEmitter<{ name: string; keyskill: any; }>= new EventEmitter
  constructor(public playerService:PlayerService){

  }

  onAdd(){
    this.playerService.addplayer({ name: this.newName, keyskill: this.newKeyskill })
   //this.addedPlayer.emit({ name: this.newName, keyskill: this.newKeyskill })
  }

}
