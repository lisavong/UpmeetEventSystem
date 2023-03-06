import { Injectable} from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { IEvent } from './interfaces/event';
import { IFavorites } from './interfaces/favorites';

@Injectable({
  providedIn: 'root'
})



export class RepositoryService {
  constructor(private http: HttpClient) { }
  EventApiUri: string = 'https://localhost:7106/api/Event'
  FavoriteApiUri: string = 'https://localhost:7106/api/Favorite'

  getEvents(){
    return this.http.get(this.EventApiUri)
  }

  addEvent(event:IEvent) {
    return this.http.post(`${this.EventApiUri}/add`,event);
  }

  // getFavoritesByUserID(favorites:IFavorites) {
  //   return this.http.get(`${this.FavoriteApiUri}/${userID}`);
  // }

  // addFavorite(favorites:IFavorites) {
  //   return this.http.post(`${this.FavoriteApiUri}/add/${userID}/${eventID}`);
  // }

  // deleteFavoriteByID(favorites:IFavorites) {
  //   return this.http.post(`${this.FavoriteApiUri}/delete/${id}`);
  // }

  //   getEventDetails(index: string){
//     let newUri = `${this.apiUri}/${index}`
//     return this.http.get<IEvent>(newUri)
//   }
}