import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DataService } from '../data.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  templateUrl: 'topBar.component.html',
  styleUrl: 'topBar.component.css',
  imports: [RouterLink, CommonModule ]
})

export class TopBarComponent implements OnInit {
  constructor(private dataService: DataService) {
    // this.toggleDarkMode = 'Dark Mode'
  }

ngOnInit() {
  //Recupera el estado del localStorage al iniciar
  const darkMode = localStorage.getItem('darkMode');
  this.toggleDarkMode = darkMode === 'true';
}

  public toggleDarkMode: boolean = false;

  @Output() modeChange = new EventEmitter<void>();

  onChangeMode(){
    this.toggleDarkMode = !this.toggleDarkMode;
    localStorage.setItem('darkMode', this.toggleDarkMode.toString());
    this.modeChange.emit();
  }

}
