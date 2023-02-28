import { IEvent } from "./interfaces/event";
import{HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://localhost:7106/api/Event'

  getEvents(){
    return this.http.get(this.apiUri)
  }

  addEvent(event:IEvent){
    return this.http.post(`${this.apiUri}/add`,event);
  }

  getEventDetails(index: number){
    let newUri = `${this.apiUri}/${index}`
    return this.http.get<IEvent>(newUri)
  }
}



