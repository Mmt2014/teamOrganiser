import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamOrganiser';
  showTeam:boolean=true;
  onSelection(event:any){
  if(event==='teams'){
    this.showTeam=true
  }
  else{
    this.showTeam=false
  }
  }
}
