import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
 id:any;
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id=params['id']
      console.log("The Id fetched for editing the team is:", this.id)
    })
  }

}
