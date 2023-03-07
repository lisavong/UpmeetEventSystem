import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFavorites } from 'app/interfaces/favorites';
import { RepositoryService } from 'app/repository.service';
import { EventComponent } from 'app/event/event.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  showFavorites: boolean = false;
  favoriteText: string = "";

  constructor(private repositoryService: RepositoryService) {}

  favorites: any;
  activeUserID: number = -1;
  deleteID: number =-1;
  id: number =-1;

  getUserID(form: NgForm) {
   this.activeUserID = form.form.value.activeUserID;
  }

  toggleFavorites(activeUserID: number) {
    this.showFavorites = !this.showFavorites;

    this.repositoryService.getFavoritesByUserID(activeUserID).subscribe(
      (response) => {
        this.favorites = response;
      });

    // if (activeUserID === null) {
    //   this.favoriteText = `You have no favorite events. Go back and add some!`;
    // }
  }

  deleteFavoriteByID(form: NgForm) {

    let deletedFavorite: IFavorites = {
      id: form.form.value.userID,
      userID: -1,
      eventID: -1
     };

    this.repositoryService.deleteFavoriteByID(deletedFavorite).subscribe(
      (response) => {
        this.repositoryService.getFavoritesByUserID(this.activeUserID);
      }
    );
  }
}
