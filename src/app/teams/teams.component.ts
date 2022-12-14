import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';
import { TeamService } from './team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [TeamService]
})
export class TeamsComponent implements OnInit{
  //selectedTeam:any = Team
  constructor(public teamService:TeamService){

  }
  ngOnInit(): void {
  
  }
  onGettingSelectedTeam(team:Team){
    //this.selectedTeam=team;
  }

}
