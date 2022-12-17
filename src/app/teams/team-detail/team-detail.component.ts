import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit{

//@Input() teamSelected:any  =new Team('','','')
teamSelected:any= Team

constructor(public teamService:TeamService){
  
  this.teamService.selectedTeam.subscribe((e:Team)=>{
    this.teamSelected= e
    
  })
  // console.log(this.teamSelected.name)
}






ngOnInit():void{
  
}

addPlayers(){
  this.teamService.addPlayers(this.teamSelected.players)
}

}

