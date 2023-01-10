import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit{
 id:any;
//@Input() teamSelected:any  =new Team('','','')
teamSelected:any= Team

constructor(public teamService:TeamService,private route:ActivatedRoute){
  this.id=this.route.snapshot.params['id']
  console.log("The selected Id is:",this.id);
  this.route.params.subscribe
  //this.teamService.selectedTeam.subscribe((e:Team)=>{
    //this.teamSelected= e
    
 // })
  // console.log(this.teamSelected.name)
}






ngOnInit():void{
  
}

addPlayers(){
  this.teamService.addPlayers(this.teamSelected.players)
}

}

