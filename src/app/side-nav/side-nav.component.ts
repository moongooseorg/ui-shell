import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { MENU } from './menu.config';

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  @Output() navigate = new EventEmitter<void>();

  readonly menu = MENU;
}
