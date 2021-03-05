import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  editable = false
  editUser = true
  deleteUser = false
  username = {
    name: '',
    active: false,
    description : "",
    imageUrl : ""
  }

  card = false

  // Tableau des Objets
  names = [
    { name: "Kamal", active: true ,description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nulla!",imageUrl:"https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { name: "Hanane", active: true,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nulla!",imageUrl: "https://images.pexels.com/photos/1447092/pexels-photo-1447092.png?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { name: "Mahmoud", active: false,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nulla!",imageUrl:"https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  },
    { name: "Nawfal", active: true,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nulla!",imageUrl:"https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  afficher(){
    this.card= !this.card
  }

  addName() {
    this.names = [...this.names, this.username]
    this.username = {
      name: '',
      active: false,
      description : "",
      imageUrl : ""

    }

    this.editable = true

    setTimeout(() => {
      this.editable = false
    }, 2000)

  }

  changeStatus(myName) {
    myName.active = !myName.active
  }

 /* deleteName(myName){
    let index = this.names.indexOf(myName)
    this.names.splice(index,1)
    console.log(index) 
  }*/

  // retourne les elements qui ne sont pas filtre
  deleteName(arg){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.names =  this.names.filter(myName => myName.name !== arg.name)
        this.deleteUser = true
        Swal.fire('Saved!', '', 'success')
      } 
    })
  }

  editName(arg){
    this.username = arg;
    this.editUser = false
  }

}
