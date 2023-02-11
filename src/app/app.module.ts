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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDropdownDirective } from './shared/my-dropdown.directive';
import { PlayerService } from './shared/services/player.service';
import { TeamStartComponent } from './teams/team-start/team-start.component';
import { TeamEditComponent } from './teams/team-edit/team-edit.component';

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
    MyDropdownDirective,
    TeamStartComponent,
    TeamEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent],
  
  schemas: [
   CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA

  ]
})
export class AppModule { }
