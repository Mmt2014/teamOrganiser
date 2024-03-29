import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { TeamStartComponent } from './teams/team-start/team-start.component';
import { TeamEditComponent } from './teams/team-edit/team-edit.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/teams',pathMatch:'full'},
  {path: 'teams', component:TeamsComponent,children:[
    {path:'',component:TeamStartComponent},
    {path:'new',component:TeamEditComponent},
    {path:':id',component:TeamDetailComponent},
    
    {path:'id/edit',component:TeamEditComponent},
  ]},
  {path: 'players', component:PlayersComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
