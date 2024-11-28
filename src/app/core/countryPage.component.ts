import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";
import { CommonModule } from "@angular/common";
import { CountryComponent } from "../shared/country/country.component";
import { FilterBarComponent } from "../shared/filter-bar/filterBar.component";
import { SearchBarComponent } from "../shared/search-bar/searchBar.component";
import { Router, RouterLink } from "@angular/router";


@Component({
  standalone: true,
  selector: 'app-country-page',
  templateUrl: './countryPage.component.html',
  styleUrl: './countryPage.component.css',
  imports: [
    CommonModule,
    CountryComponent,
    FilterBarComponent,
    SearchBarComponent,
    // RouterLink
]
})
export class CountryPageComponent implements OnInit {

  public countries: any[] = [];

  public countriesRendered: any[] = [];

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.dataService.getCountries().subscribe((data: any) => {
      this.countries = data;
      this.countriesRendered = this.countries;
      this.dataService.renderedCountries = this.countriesRendered;
    });
  }

  public filterByRegion(region: string){
    // console.log(region);
    this.countries = this.dataService.filterCountries(region);
    this.countriesRendered = this.countries;
    this.dataService.renderedCountries = this.countriesRendered;
  }

  public filterBySearch(search: string){
    this.countriesRendered = this.countries.filter((country: any)=> country.name.toLowerCase().includes(search.toLowerCase()));
    this.dataService.renderedCountries = this.countriesRendered;
  }

  public goToDetails(index: number){
    this.router.navigate(['details', this.countriesRendered[index].name]);
    // alert(this.countriesRendered[index].name);
  }



}
