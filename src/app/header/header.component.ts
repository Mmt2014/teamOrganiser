import { Component, EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Output() onSelection:EventEmitter<string>= new EventEmitter();
  constructor() {}

  ngOnInit(): void{

  }
 // onSelect(pageName:string){
 //  this.onSelection.emit(pageName)
  //}

}
