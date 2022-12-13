import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../../team.model';

@Component({
  selector: 'app-individual-team',
  templateUrl: './individual-team.component.html',
  styleUrls: ['./individual-team.component.css']
})
export class IndividualTeamComponent {
 @Input() team: any= Team;
 @Output() onTeamSelect:EventEmitter<any>=new EventEmitter();

 onSelectingTeam(){
  this.onTeamSelect.emit()
 }
}
