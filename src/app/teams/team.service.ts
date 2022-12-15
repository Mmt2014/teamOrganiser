import { EventEmitter } from "@angular/core";
import { Player } from "../shared/players.model";
import { Team } from "./team.model";

export class TeamService{
    
       selectedTeam:EventEmitter<any>=new EventEmitter();
    teams: Team[] = [new Team('Team1', 'This is team number 1', 'https://cdn1.vectorstock.com/i/1000x1000/64/45/colorful-people-group-team-logo-vector-22436445.jpg',[new Player('Joe','Batting'),new Player('Mickel','Bowling')]),
    new Team('Team2', 'This is team number 2', 'https://cdn1.vectorstock.com/i/1000x1000/64/45/colorful-people-group-team-logo-vector-22436445.jpg',[])]

    getTeams(){
        return this.teams

    }

  
}
