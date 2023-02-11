import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
 id:any;
 editMode:boolean=false;
 
 teamForm:any=FormGroup;
  team:any=Team
 
  constructor(private route:ActivatedRoute,private teamService:TeamService){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.initForm()
      this.id=params['id'];
      if(params['id']){
        this.editMode=true
      }
      this.editMode=true
      console.log("The Id fetched for editing the team is:", this.id)
    })
  }
  initForm(){
    let teamName='';
    let logo='';
    let description='';
    let players=new FormArray([])
    if(this.editMode){
       //add logic for editing the team
       this.team=this.teamService.getTeam(this.id);
       teamName=this.team.name;
       logo=this.team.logo;
       description=this.team.description;
       if(this.team['players']){
        for(let player of this.team['players']){
          players.push(new FormGroup({'name':new FormControl(player.name)}))
        }
       }
    }
    this.teamForm = new FormGroup({
      'name': new FormControl(teamName),
      'logo': new FormControl(logo),
      'description': new FormControl(description),
      'players': players
    })
  }
 onSubmit(){
  console.log('On form submit', this.teamForm)
 } 
}
