import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  
  searchByCountry(country: string): void {  
    this.isLoading = true;
    
    this.countriesService.searchCountry(country).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }
  
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }
}
