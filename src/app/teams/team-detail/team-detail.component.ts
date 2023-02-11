import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit{
 id:any;
 
//@Input() teamSelected:any  =new Team('','','')
teamSelected:any= Team

constructor(public teamService:TeamService,private route:ActivatedRoute,private router:Router
  ) {
  this.id=this.route.snapshot.params['id']
  
  this.route.params.subscribe((params)=>{
    this.id=params['id'];
    const data:any=[]
    data.push(this.teamService.getTeam(this.id));
    // console.log("ddddd",data,typeof data)
    data.filter((e:any,i:any): void=>{
    if (Number(this.id)===Number(i)) { //filter the data
        this.teamSelected=e;
        console.log(this.teamSelected)
      }
    })
    // console.log(params)
    
  })
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
onEditTeam(){
  this.router.navigate(["../",this.id,'edit'],{relativeTo:this.route})
}

}

