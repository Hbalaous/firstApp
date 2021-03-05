import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name-grid',
  templateUrl: './name-grid.component.html',
  styleUrls: ['./name-grid.component.css']
})
export class NameGridComponent implements OnInit {
  @Input('grid-names') gridNames =[]
  @Output('delete') destroy = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  destroyName( name){
    this.destroy.emit(name)
  }

}
