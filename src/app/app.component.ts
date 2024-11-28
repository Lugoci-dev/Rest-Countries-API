import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './shared/top-bar/topBar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rest-countries-api';

  public isLightMode: boolean = false;

  toogleLightMode(){
    this.isLightMode = !this.isLightMode;

    localStorage.setItem('darkMode', this.isLightMode.toString());
  }

  ngOnInit() {
    //Recupera el estado del localStorage al iniciar
    const darkMode = localStorage.getItem('darkMode');
    this.isLightMode = darkMode === 'true';
  }


}
