import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client} from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public client = new Client(environment.server);

  constructor() { }

  async getPage(page){
    return await this.client.movieAll(page);
  }

}
