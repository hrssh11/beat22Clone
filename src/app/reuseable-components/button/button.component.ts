import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

export enum ButtonStyle {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

@Component({
  selector: 'beat22-button',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() style: ButtonStyle = ButtonStyle.PRIMARY;
  @Input() disabled: boolean = false;
  @Input() iconName: string = '';
  @Input() iconColor: string = 'white';
}
