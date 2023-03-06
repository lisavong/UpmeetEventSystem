import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEvent } from 'app/interfaces/event';
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

  ngOnInit(): void {
    this.gettEvents();
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

}
