import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
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
import { BaseIcon } from 'primeng/baseicon';

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
    BaseIcon,
  ],
  templateUrl: './listing-beat.component.html',
  styleUrl: './listing-beat.component.scss',
})
export class ListingBeatComponent implements OnInit {
  loading: boolean = false;
  @ViewChild('modal') modal!: ElementRef;
  beatsData: any[] = [];
  protected buttonStyle = ButtonStyle;
  protected chipsStyle = ChipStyle;
  protected selectedIcon: string = 'list';

  protected chipsCatgory: {
    label: string;
    style: ChipStyle;
    active?: boolean;
  }[] = ChipsCatgory;

  popUpData: {
    image: any;
    title: any;
    price: any;
    artist: any;
  } = {
    image: undefined,
    title: undefined,
    price: undefined,
    artist: undefined,
  };

  isOpen: boolean = false;
  protected filterList = FilterList;

  constructor(private apiService: ApiService) {}

  onBackdropClick(event: MouseEvent): void {
    this.isOpen = false;
  }

  ngOnInit(): void {
    this.getBeats();
  }

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
    this.loading = true;
    this.apiService.getTrendingPlaylists().subscribe((data) => {
      this.beatsData = data?.playlists[0]?.beats || [];
      this.loading = false;
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

  getPopupData(event: any) {
    this.isOpen = true;
    console.log(event, 'event');
    this.popUpData = event;
  }
}
