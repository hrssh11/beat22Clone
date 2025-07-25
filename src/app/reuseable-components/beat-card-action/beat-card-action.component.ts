import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent, ButtonStyle } from '../button/button.component';
import { ChipsComponent } from '../chips/chips.component';

@Component({
  selector: 'beat22-card-action',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent, ChipsComponent],
  templateUrl: './beat-card-action.component.html',
  styleUrl: './beat-card-action.component.scss',
})
export class BeatCardActionComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() artist: string = '';
  @Input() bpm: number | string = '';
  @Input() key: string = '';
  @Input() tags: string[] = [];
  @Input() price: number | string = '';
  @Input() isStarred: boolean = false;
  @Input() isVerified: boolean = false;

  @Output() getSelectRowData = new EventEmitter();

  protected buttonStyle = ButtonStyle.PRIMARY;

  getSelectRowDataHandler() {
    this.getSelectRowData.emit({
      image: this.image,
      title: this.title,
      price: this.price,
      artist: this.artist,
    });
  }
}
