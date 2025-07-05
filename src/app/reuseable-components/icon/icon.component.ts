import { Component, Input } from '@angular/core';
import { IconsModule } from './icons.module';
export enum IconTheme {
  DEFAULT = 'DEFAULT',
  PRIMARY = 'PRIMARY',
  PRIMARY_SQUARE = 'PRIMARY_SQUARE',
  SECONDARY_SQUARE = 'SECONDARY_SQUARE',
  YELLOW_SQUARE = 'YELLOW_SQUARE',
  PRIMARY_ROUND = 'PRIMARY_ROUND',
}

const THEME_PADDING_RATIO = 0.2;

@Component({
  selector: 'beat22-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [IconsModule],
})
export class IconComponent {
  @Input() theme: keyof typeof IconTheme = IconTheme.DEFAULT;
  @Input() name: string = '';
  @Input() width!: number;
  @Input() height!: number;
  @Input() color!: string;
  @Input() size!: number;

  get iconWidth(): number {
    return this.width - this.width * THEME_PADDING_RATIO;
  }

  get iconHeight(): number {
    return this.height - this.height * THEME_PADDING_RATIO;
  }

  get isDefaultTheme(): boolean {
    return this.theme === IconTheme.DEFAULT;
  }
}
