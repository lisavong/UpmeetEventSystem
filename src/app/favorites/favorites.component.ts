import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFavorites } from 'app/interfaces/favorites';
import { RepositoryService } from 'app/repository.service';
import { EventComponent } from 'app/event/event.component';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  showFavorites: boolean = false;
  noFavorites: boolean = false;
  favoriteText: string = "";

  constructor(private repositoryService: RepositoryService) {}

  favorites: any;
  activeUserID: number = -1;
  deleteID: number =-1;
  id: number =-1;

  events: any;
  date: string ="";
  name: string = "";
  description: string = "";
  price: string = "";
  location: string= "";

  getUserID(form: NgForm) {
   this.activeUserID = form.form.value.activeUserID;
   form.resetForm();
   form.reset();
   this.showFavorites = false;
   this.noFavorites = false;
  }

  toggleFavorites(activeUserID: number) {
    forkJoin({
      events: this.repositoryService.getEvents(),
      favorites: this.repositoryService.getFavoritesByUserID(this.activeUserID)
    })
    .pipe(
      map(response => {
        const events = <Array<any>>response.events;
        const favorites = <Array<any>>response.favorites;
        const result: any[] = [];
        favorites.map((favorites: any) => {
          result.push({
            ...favorites, 
            ...events.find((events: any) => events.eventID === favorites.eventID)})
        });
  
        console.log("result ", result)
        return result;
      })
    )
    .subscribe((response) => {
      this.favorites = response;
      if (this.favorites == undefined) {
        this.noFavorites = true;
      }
      else {
        this.showFavorites = true;
      }
    });
    }

    
  deleteFavoriteByID(form: NgForm) {

    let deletedFavorite: IFavorites = {
      id: form.form.value.deleteID,
      userID: -1,
      eventID: -1
     };

    this.repositoryService.deleteFavoriteByID(deletedFavorite.id).subscribe(
      (response) => {
        this.repositoryService.getFavoritesByUserID(this.activeUserID);
      }
    );
  }
}
