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
 //@Output() onTeamSelect:EventEmitter<any>=new EventEmitter();
constructor(public teamService:TeamService){

}
  
  
 ngOnInit():void{

 }

 onSelectingTeam(){
  console.log(this.teamService.getTeams())
 }
}
