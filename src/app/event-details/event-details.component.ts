import { Component, Input , OnInit} from '@angular/core';
import { IEvent } from 'app/interfaces/event';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'app/repository.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  @Input() index: number = -1;

  constructor(private route: ActivatedRoute, private repo:RepositoryService) { }
  eventDetails: any;
  date: string ="";
  name: string = "";
  description: string = "";
  price: string = "";
  location: string= "";

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index'];
    this.repo.getEventByID(this.index).subscribe(
      (response) => {this.eventDetails = response;});
  }
}
