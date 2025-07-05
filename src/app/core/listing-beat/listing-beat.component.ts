import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ButtonComponent,
  ButtonStyle,
} from '../../reuseable-components/button/button.component';
import {
  ChipsComponent,
  ChipStyle,
} from '../../reuseable-components/chips/chips.component';
import { TextInputComponent } from '../../reuseable-components/text-input/text-input.component';
import { IconComponent } from '../../reuseable-components/icon/icon.component';
import { ChipsCatgory, FilterList } from './beat22.mock';
import { FilterSearchDropdownComponent } from '../../reuseable-components/filter-search-dropdown/filter-search-dropdown.component';
import { BeatCardActionComponent } from '../../reuseable-components/beat-card-action/beat-card-action.component';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-listing-beat',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ChipsComponent,
    TextInputComponent,
    IconComponent,
    FilterSearchDropdownComponent,
    BeatCardActionComponent,
  ],
  templateUrl: './listing-beat.component.html',
  styleUrl: './listing-beat.component.scss',
})
export class ListingBeatComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  beatsData: any[] = [];

  ngOnInit(): void {
    this.getBeats();
  }

  protected buttonStyle = ButtonStyle;
  protected chipsStyle = ChipStyle;
  protected selectedIcon: string = 'list';

  protected chipsCatgory: {
    label: string;
    style: ChipStyle;
    active?: boolean;
  }[] = ChipsCatgory;

  protected filterList = FilterList;

  setActiveCategory(item: {
    label: string;
    style: ChipStyle;
    active?: boolean;
  }) {
    this.chipsCatgory.forEach((chip) => {
      chip.active = false;
    });
    item.active = true;
  }

  toggleCheckBoxDropdown(event: MouseEvent) {
    event.preventDefault;
  }

  getBeats() {
    this.apiService.getTrendingPlaylists().subscribe((data) => {
      this.beatsData = data?.playlists[0]?.beats || [];
      console.log('Beats data length:', this.beatsData);
    });
  }

  getkey(key: string) {
    return key
      .replace(/_/g, ' ') // Replace underscores with spaces
      .split(' ') // Split into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
      .join(' '); // Join back to string
  }
}
