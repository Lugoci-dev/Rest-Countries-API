import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public countriesList: any[] = [];

  public detailSelectedCountry?: any;

  public renderedCountries: any[] = [];

  // public selectedCountry: any = new Observable<any>();
  // public countriesSubject: Subject<any> = new Subject<any>();
  // public countries: Observable<any> = this.countriesSubject.asObservable();

  constructor() {
    this.getCountries();
  }

  public getCountries(): Observable<any> {
    return new Observable(subscriber => {
      fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          this.countriesList = data;
          // this.countriesSubject.next(data);
          subscriber.next(data);
          subscriber.complete();
        })
        .catch(error => subscriber.error(error));
    });
  }

  public filterCountries(region: string): any[] {
    let countries: any[] = [];
    countries = this.countriesList.filter((country: any) => country.region === region);
    console.log(countries);
    return countries;
  }

  public selectCountry(name: string): Promise<any>{
    // this.detailSelectedCountry = this.renderedCountries.find((country: any) => country.name === name);
    let dataS;

    return new Promise((resolve, reject)=>{
      this.getCountries().subscribe(data=>{
        dataS = data.find((country: any) => country.name === name);
        // alert(dataS)
        resolve(dataS)
      });

    })


    // alert(this.detailSelectedCountry)
    // return dataS;
    // this.detailSelectedCountry = this.renderedCountries.find((country: any) => country.name === name);
    // return this.detailSelectedCountry;
    // alert(this.renderedCountries[0])
  }

}

