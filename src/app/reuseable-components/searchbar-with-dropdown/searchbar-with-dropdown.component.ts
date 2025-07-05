import { Component, Input, ViewChild } from '@angular/core';
import { DropdownPanelComponent } from '../dropdown-panel/dropdown-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-searchbar-with-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownPanelComponent, FormsModule, IconComponent],
  templateUrl: './searchbar-with-dropdown.component.html',
  styleUrl: './searchbar-with-dropdown.component.scss',
})
export class SearchbarWithDropdownComponent {
  @ViewChild('dropdownPanel') dropdownPanel!: DropdownPanelComponent;
  @Input() selectedCategory: string = 'General';
  @Input() categories: string[] = [
    'General',
    'Beat',
    'Tag',
    'Mood',
    'Genre',
    'Handle',
    'Studio',
  ];

  protected searchTerm: string = '';
  protected selectedCategoryIndex: number | null = null;
  protected isOpen: boolean = false;

  togglePanel(event: MouseEvent) {
    this.dropdownPanel.toggle(event);
    this.isOpen = !this.isOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.dropdownPanel.hide();
    this.isOpen = false;
  }
}
