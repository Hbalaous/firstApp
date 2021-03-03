import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  editable = false
  username = {
    name: '',
    active: false
  }

  names = [
    { name: "Kamal", active: true },
    { name: "Hanane", active: true },
    { name: "Mahmoud", active: false },
    { name: "Nawfal", active: true }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  addName() {
    this.names = [...this.names, this.username]
    this.username = {
      name: '',
      active: false
    }

    this.editable = true

    setTimeout(() => {
      this.editable = false
    }, 2000)

  }

  changeStatus(myName) {
    myName.active = !myName.active
  }

}
