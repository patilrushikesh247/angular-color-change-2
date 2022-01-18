import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'color-change';
 


show="Show";
  showMe = false;


  toogleTag() {

    this.showMe = !this.showMe
    this.show = this.showMe ? 'show' : 'hide';
  
  }


  toggle = true;
  status = 'green';


  buttonColor() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'green' : 'red';
  }


  setRedClass: boolean = false;

  toggleClass() {
    this.setRedClass = !this.setRedClass;
  }


  firstName="Rushi";
  green="green";
  red="red";

  userName="Rushikesh";
   userSurname="patil";
    age=19;

  
}




