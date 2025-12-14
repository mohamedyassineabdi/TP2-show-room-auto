import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  @Input() autos: Auto[] = [];
  @Output() selectAutoEvent = new EventEmitter<Auto>();

  brand: string = '';
  filteredAutos: Auto[] = [];

  searchAutoList() {
    const q = this.brand ? this.brand.trim().toLowerCase() : '';
    if (q.length > 0) {
      // prefix match: show brands that start with the typed characters
      this.filteredAutos = this.autos.filter(auto => auto.brand.toLowerCase().startsWith(q));
    } else {
      this.filteredAutos = [];
    }
  }

  selectedAuto(auto: Auto) {
    this.selectAutoEvent.emit(auto);
  }
}