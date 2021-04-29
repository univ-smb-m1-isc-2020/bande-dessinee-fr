import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublishersService {

  public client = new Client(environment.server);

  constructor() { }

  async getPage(page){
    return await this.client.movieAll(page);
  }
}
