import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { TeamStartComponent } from './teams/team-start/team-start.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/teams',pathMatch:'full'},
  {path: 'teams', component:TeamsComponent,children:[
    {path:'',component:TeamStartComponent},
    {path:':id',component:TeamDetailComponent},
  ]},
  {path: 'players', component:PlayersComponent},
  {path:'**',component:TeamsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
