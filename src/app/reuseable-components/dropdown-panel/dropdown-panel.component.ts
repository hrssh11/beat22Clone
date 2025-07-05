import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'beat22-dropdown-panel',
  templateUrl: './dropdown-panel.component.html',
  styleUrls: ['./dropdown-panel.component.scss'],
  standalone: true,
  imports: [OverlayPanelModule],
})
export class DropdownPanelComponent {
  @Input() style?: Record<string, string>;
  @Output() panelHide = new EventEmitter<void>();
  @ViewChild('overlayPanel') overlayPanel!: OverlayPanel;

  toggle($event: any) {
    // Close all other panels before opening this one
    this.overlayPanel.toggle($event);
  }
  show($event: any) {
    // Close all other panels before showing this one
    this.overlayPanel.show($event);
  }
  hide() {
    this.overlayPanel.hide();
  }
  onPanelHide() {
    this.panelHide.emit();
  }
}
