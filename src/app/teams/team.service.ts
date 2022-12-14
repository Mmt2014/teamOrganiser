import { EventEmitter } from "@angular/core";
import { Team } from "./team.model";

export class TeamService{
    reactiveData:EventEmitter<any>=new EventEmitter();
       selectedTeam:EventEmitter<any>=new EventEmitter();
    teams: Team[] = [new Team('Team1', 'This is team number 1', 'https://cdn1.vectorstock.com/i/1000x1000/64/45/colorful-people-group-team-logo-vector-22436445.jpg'),
    new Team('Team2', 'This is team number 2', 'https://cdn1.vectorstock.com/i/1000x1000/64/45/colorful-people-group-team-logo-vector-22436445.jpg')]

    getTeams(){
        console.log("getting teams from the the team service")
        return this.teams
    }
}