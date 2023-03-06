import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UpmeetEventSystem';
  userID = -1;

  // addUserID(form:NgForm){
  //   let userID = form.form.value.userID;
  //   this.favorites.push(userID);
  // }
}
