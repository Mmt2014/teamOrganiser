import { Component, NgModule, OnInit } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];

  constructor() {
    this.teams = [
      new Team('Team1', 'This is team number 1', 'https://cdn1.vectorstock.com/i/1000x1000/64/45/colorful-people-group-team-logo-vector-22436445.jpg'),
       new Team('Team2', 'This is team number 2', 'logo')]
  }
  ngOnInit(): void {
    ;
  }
}