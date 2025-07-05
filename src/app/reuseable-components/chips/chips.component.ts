import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export enum ChipStyle {
  DEFAULT = 'default',
  ORANGE = 'orange',
  SKYBLUE = 'sky-blue',
  GRADIANTPINK = 'gradiant-pink',
  PINK = 'pink',
}

@Component({
  selector: 'beat22-chips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss',
})
export class ChipsComponent {
  @Input() label: string = 'Label';
  @Input() style: ChipStyle = ChipStyle.DEFAULT;
  @Input() active: boolean = true;

  get chipClasses() {
    return {
      chip: true,
      [`${this.style}`]: true,
      [`${this.style}--active`]: this.active,
    };
  }
}
