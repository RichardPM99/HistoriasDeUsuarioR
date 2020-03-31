import { Injectable } from '@angular/core';
import { ApiSearchService } from './api-search.service';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ApiDataSearchService {

  /*private clientes: Profile[] = [];

  constructor(private dataSource: ApiSearchService) {
    this.dataSource.apiSearch(name)
      .toPromise((clientes) => {
        this.clientes = clientes;
        console.log(this.clientes);

      })

  }


  getClientesProfile(): Profile[] {
    return this.clientes;
  }*/

}
