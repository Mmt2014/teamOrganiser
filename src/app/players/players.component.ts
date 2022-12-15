import { Component, OnInit } from '@angular/core';
import {Player} from '../shared/players.model'
import { PlayerService } from '../shared/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:Player[]=[];
  constructor(public playerService:PlayerService){
   this.players=this.playerService.getPlayers()
   this.playerService.playersChanged.subscribe((players)=>{
    this.players=players
   })
  }
  ngOnInit(): void {
    
  }
 
}
