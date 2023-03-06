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


  toggleFavorites(): void {
    this.showFavorites = !this.showFavorites;
    // if (favorites = null) {
    //   this.favoriteText = `You have no favorite events. Go back and add some!`;
    // }
  }

  
}
