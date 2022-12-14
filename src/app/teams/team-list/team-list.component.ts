import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  
  
  //@Output() selectedTeam:EventEmitter<any>=new EventEmitter()
  

  constructor(public teamService: TeamService) {
    this.teams = this.teamService.getTeams()
  }
  ngOnInit(): void {
    ;
  }
  onTeamSelect(team:Team){
    //this.selectedTeam.emit(team)
  }
}
