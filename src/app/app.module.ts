import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { IndividualTeamComponent } from './teams/team-list/individual-team/individual-team.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { PlayersComponent } from './players/players.component';
import { PlayerEditComponent } from './players/player-edit/player-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamListComponent,
    IndividualTeamComponent,
    TeamDetailComponent,
    PlayersComponent,
    PlayerEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
   CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA

  ]
})
export class AppModule { }
