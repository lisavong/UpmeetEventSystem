import { Component } from '@angular/core';
import { RepositoryService } from 'app/repository-service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  
  constructor(private repositoryService: RepositoryService) { }
  events: any;
  eventID: number=0;
  name: string="";
  description: string = "";
  price: number = 0.00;
  location: string = "";
  date: string = "2/27/2023"

  ngOnInit(): void {
    this.getInitialEvents();
  }

  getInitialEvents() {
    this.repositoryService.getEvents().subscribe(
      (response) => {

         this.events = response; 
          //add alert
          //do calculations
        });
  };
}
