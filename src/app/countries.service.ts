import { Injectable } from '@angular/core';
import { Country } from './Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries:Country[] =[
    new Country("USA", "English","Hello World", ["red", "white", "blue"], "https://clipartix.com/wp-content/uploads/2016/11/Us-flag-american-flag-usa-clipart.png"),
    new Country("Spain", "Spanish", "Hola Mundo",["red","yellow", "red"], "https://clipartix.com/wp-content/uploads/2016/04/Clip-art-spain-flag-dromfeo-top-2.jpg"),
    new Country("France","French","Bonjour le monde",["blue", "white", "red"],"https://www.kindpng.com/picc/m/282-2821758_png-download-png-download-flag-of-france-clipart.png"),
    new Country("Japan", "Japanese","Kon'nichiwa sekai",["white","red","white"],"https://st2.depositphotos.com/11953928/46614/v/380/depositphotos_466142818-stock-illustration-japanese-flag-symbol.jpg?forcejpeg=true"),
    new Country("China", "Mandarin","Nǐ hǎo shìjiè",["yellow", "red", "red"],"https://static.vecteezy.com/system/resources/thumbnails/002/747/503/small_2x/china-flag-with-pole-in-cartoon-style-isolated-on-white-background-free-vector.jpg")
  ];
    constructor() { }

    getCountries():Country[]{
      return this.countries;
    }

    
}
