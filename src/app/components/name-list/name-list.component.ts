import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {
  @Input('liste-names') listeNames =[]
  @Output('delete') destroy = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }


  destroyName( name){
    this.destroy.emit(name)
  }
}
