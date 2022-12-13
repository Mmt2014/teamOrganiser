import { Component } from '@angular/core';
import { Team } from './team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  selectedTeam:any = Team
  onGettingSelectedTeam(team:Team){
    this.selectedTeam=team;
  }

}
