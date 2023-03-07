import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RepositoryService } from 'app/repository.service';

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

  // deleteFavoriteByID(deleteID: number) {
  //   this.repositoryService.deleteFavoriteByID(deleteID).subscribe(
  //     (response) => {
  //       this.toggleFavorites(this.activeUserID);
  //     }
  //   );
  }
