import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { Team } from '../../team.model';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-individual-team',
  templateUrl: './individual-team.component.html',
  styleUrls: ['./individual-team.component.css']
})
export class IndividualTeamComponent implements OnInit {
 @Input() team: any= Team;
 @Input() id: any ;
 //@Output() onTeamSelect:EventEmitter<any>=new EventEmitter();
constructor(public teamService:TeamService) {

}
  
  
 ngOnInit():void{
 }

 onSelectingTeam(){
  //this.teamService.teams.
// this.teamService.selectedTeam.emit(this.team)
 }
}
