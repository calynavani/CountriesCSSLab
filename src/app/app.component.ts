import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from './Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CountriesCSS';
  constructor(private countryService:CountriesService){}
  countries:Country[] = this.countryService.getCountries();
  displayColors(index: number){
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.border = `1px solid ${this.countries[index].colors[0]}`;
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.backgroundColor = `${this.countries[index].colors[1]}`;
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.color = `${this.countries[index].colors[2]}`;

  }

  defaultColors(index: number){
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.border = "none";
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.backgroundColor = "white";
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.color = "black";
  }
}
