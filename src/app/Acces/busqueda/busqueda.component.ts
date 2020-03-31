import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiDataSearchService } from 'src/app/api-data-search.service';
import { Profile } from 'src/app/profile';
import { ApiSearchService } from 'src/app/api-search.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  place;
  perfil: Profile ;
  storedTheme: string = localStorage.getItem('theme-color');

  constructor(private formBuil: FormBuilder, private dataApi: ApiSearchService, public authService: AuthService) {
    this.place = formBuil.group({
      name: ''
    })
   }

   search(place){
    console.log(place);
    this.load(place);
    
  }   

  error = false;

   async load(place){
     try {
      await this.dataApi.apiSearch(place.name).toPromise().then((res)=>{
        this.perfil = res;
        console.log(res);
        this.error = false;
      });
     } catch (error) { 
       this.error = true;    
     }
     
     
   }

  ngOnInit() {
    this.load(this.place);
  }

  setTheme() {
    if(this.storedTheme === 'theme-dark'){
      localStorage.setItem('theme-color','theme-light');
      this.storedTheme = localStorage.getItem('theme-color')
    }else{
      localStorage.setItem('theme-color','theme-dark');
      this.storedTheme = localStorage.getItem('theme-color')
    }
  }
  

}
