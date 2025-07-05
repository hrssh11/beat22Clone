import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { DropdownPanelComponent } from '../dropdown-panel/dropdown-panel.component';

@Component({
  selector: 'beat22-filter-search-dropdown',
  standalone: true,
  imports: [IconComponent, DropdownPanelComponent],
  templateUrl: './filter-search-dropdown.component.html',
  styleUrl: './filter-search-dropdown.component.scss',
})
export class FilterSearchDropdownComponent {
  @Input() label: string = '';

  isOpen: boolean = false;

  toggleCheckBoxDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
    // Logic to toggle the dropdown can be added here
  }
}
