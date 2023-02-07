import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Player} from '../shared/players.model'
import { PlayerService } from '../shared/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit,OnDestroy{

  players:Player[]=[];
  subscription: any = Subscription
  constructor(public playerService:PlayerService){
   this.players=this.playerService.getPlayers()
   this.subscription=this.playerService.playersChanged.subscribe((players)=>{
    this.players=players
   })
  }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
    this.subscription.unsubscribe()
  }
 
}
