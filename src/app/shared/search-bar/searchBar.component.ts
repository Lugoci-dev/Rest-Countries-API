import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './searchBar.component.html',
  styles: [`
    .search-bar {
      color: var(--dark-mode-text);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background-color: var(--dark-mode-elements);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      padding: 20px;
      padding-top: 5px;
      padding-bottom: 5px;
      border-radius: 5px;
      width: 33vw;
      height: 56px;
      transition: all ease-in-out .5s;
    }
    input {
      margin-left: 20px;
      color: var(--dark-mode-text);
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      transition: all ease-in-out .5s;
    }
    input:focus {
      outline: none;
    }
    input::placeholder {
      color: var(--dark-mode-text);
    }

    @media(max-width: 1000px){
      .search-bar {
        width: 100%
      }
    }
    `
  ]
})
export class SearchBarComponent {

  public search: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  public searchCountry(){
    this.searchEvent.emit(this.search);
  }

}

