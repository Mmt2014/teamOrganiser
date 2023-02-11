import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit, OnDestroy {
  editMode:any
  indexToEdit:any
  player:any
  
  @ViewChild('playerForm') playerForm:any=NgForm
  subscription:any=Subscription

  //newName:string ='';
  //newKeyskill: any ='';
  //@Output() addedPlayer:EventEmitter<{ name: string; keyskill: any; }>= new EventEmitter
  constructor(public playerService:PlayerService){
   this.subscription=this.playerService.indexToEdit.subscribe((index)=>{
    this.indexToEdit= index;
    this.editMode=true//index se value lene ke bad player service jakar value fetch krne ke bad  value ko form  me submit ho gya
     this.player = this.playerService.getPlayer(this.indexToEdit);
     console.log(this.player,this.indexToEdit)
    //  this.PlayerForm.setValue({name:this.player.name,keyskill:this.player.keyskill})
     this.playerForm.setValue({name:this.player.name, keyskill:this.player.keyskill})
   })
  }
   ngOnInit(): void {
     
   }
  onAdd(){
    console.log(this.playerForm)

    const value= this.playerForm.value;
    if(this.editMode){
      this.playerService.updatePlayer(this.indexToEdit,{name: value.name, keyskill:value.keyskill})
    }
    else{
    this.playerService.addPlayer({ name: value.name, keyskill:value.keyskill})
   //this.addedPlayer.emit({ name: this.newName, keyskill: this.newKeyskill })
  }
  this.onReset()

}

onReset(){
  this.editMode=false
  this.playerForm.reset();
}
onDelete(){// after that add delete method to playservice
  this.playerService.deletePlayer(this.indexToEdit)
  this.onReset()
}
ngOnDestroy(): void {
  this.subscription.unsubscribe()
}

}
