import { Component, OnInit } from '@angular/core';
import {Player} from '../shared/players.model'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:Player[]=[];
  constructor(){
   this.players=[new Player('John','Batting'),new Player('Smit','Bowling')]
  }
  ngOnInit(): void {
    
  }

}
