import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEvent } from 'app/interfaces/event';
import { IFavorites } from 'app/interfaces/favorites'
import { RepositoryService } from 'app/repository.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  

  constructor(private repositoryService: RepositoryService) { }
  events: any;
  date: string ="";
  name: string = "";
  description: string = "";
  price: string = "";
  location: string= "";
  userID: number = -1;
  eventID: number =-1;

  buttonEventText: string = "Click To Add A New Event!";
  buttonFaveText: string = "Want To Add An Event To Your Favorites List?"
  showEventAdd: boolean = false;
  showFaveAdd: boolean = false;


  ngOnInit(): void {
    this.gettEvents();
  }

  toggleAddEvent(): void {
    this.showEventAdd = !this.showEventAdd;
    if (this.showEventAdd) {
      this.buttonEventText = "Close";
    }
    else {
      this.buttonEventText = "Click To Add A New Event!";
    }
  }

  addEvent(form: NgForm) {
    let newEvent: IEvent = {
      eventID: -1,
      date: form.form.value.date,
      name: form.form.value.name,
      description: form.form.value.description,
      price: form.form.value.price,
      location: form.form.value.location
    };

    this.repositoryService.addEvent(newEvent).subscribe(
      () => {
        this.gettEvents();
      }
    );

    form.resetForm();
  };

  gettEvents() {
    this.repositoryService.getEvents().subscribe(
      (response) => {
        this.events = response;
      });
  }

  toggleAddFave(): void {
    this.showFaveAdd = !this.showFaveAdd;
    if (this.showFaveAdd) {
      this.buttonFaveText = "Close";
    }
    else {
      this.buttonFaveText = "Want To Add An Event To Your Favorites List?";
    }
  }

  addFavorite(form: NgForm) {
   let newFavorite: IFavorites = {
    id: -1,
    userID: form.form.value.userID,
    eventID: form.form.value.eventID
   };

   this.repositoryService.addFavorite(newFavorite).subscribe(
    () => {}
   );
   form.resetForm();
  }

}
