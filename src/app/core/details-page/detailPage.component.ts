
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-detail-page',
  templateUrl: './detailPage.component.html',
  styleUrl: './detailPage.component.css',
  imports: [ RouterLink, CommonModule ]
})

export class DetailPageComponent implements OnInit {
  constructor(private dataService: DataService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  public selectedCountryName: string = "";

  public selectedCountryBorders: string[] = ['']
  // @Input()
  public selectedCountry!: any;



  ngOnInit() {
    this.ActivatedRoute.params.subscribe((params) => {
      this.selectedCountryName = params['name'];
      // alert(this.selectedCountryName)
      this.selectCountryByParams(this.selectedCountryName)
    });




  }

  selectCountryByParams(name: any){
    // this.selectedCountry = this.dataService.selectCountry(name);
    this.dataService.selectCountry(name)
      .then(response => {
        // alert(response)
        this.selectedCountry = response;

        if(this.selectedCountry.borders != undefined ){
          this.selectedCountryBorders = this.renameBorders(this.selectedCountry.borders);
        }
      })
  }

  goToCountry(border: string){
    // alert(border);
    this.router.navigate(['/details', border]);
  }

  renameBorders(borders: string[]): string[]{
    let bordersName: string[] = [];

    borders.forEach(border => {
      this.dataService.countriesList.forEach((country: any) => {
        if(country.alpha3Code === border){
          bordersName.push(country.name)
        }
      });
    });
    return bordersName;
  }
}
