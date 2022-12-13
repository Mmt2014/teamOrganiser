import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent {
  newName:string ='';
  newKeyskill: any ='';
  @Output() addedPlayer:EventEmitter<{ name: string; keyskill: any; }>= new EventEmitter

  onAdd(){
   this.addedPlayer.emit({ name: this.newName, keyskill: this.newKeyskill })
  }

}
