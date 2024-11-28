import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-filter-bar',
  templateUrl: './filterBar.component.html',
  styleUrls: ['./filterBar.component.css'],
  imports: [CommonModule]
})
export class FilterBarComponent implements OnInit {

  public renderedTag = '';
  public isDeployed: boolean = false;

  ngOnInit(): void {
    this.renderedTag = 'Filter by Region'
  }

  @Output()
  public filtering: EventEmitter<string> = new EventEmitter();

  public toggleButton(){
    if(this.isDeployed === false){
      this.isDeployed = true;
    }else{
      this.isDeployed = false;
    }
  }


  public filterRegion(region: string){
    this.renderedTag = region
    this.filtering.emit(region);
    this.isDeployed = false;
  }
}
