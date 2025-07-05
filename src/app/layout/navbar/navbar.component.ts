import { Component } from '@angular/core';
import { SearchbarWithDropdownComponent } from '../../reuseable-components/searchbar-with-dropdown/searchbar-with-dropdown.component';
import {
  ButtonComponent,
  ButtonStyle,
} from '../../reuseable-components/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchbarWithDropdownComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected buttonStyle = ButtonStyle;
}
