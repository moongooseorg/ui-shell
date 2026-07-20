import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { AsyncPipe } from '@angular/common';

import { ThemeService } from '../theme.service';
import { DOMAIN } from '../../environment';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSelectModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleSideMenu = new EventEmitter<void>();

  readonly themeService = inject(ThemeService);
  readonly domain = DOMAIN;

  onThemeSelect(event: MatSelectChange): void {
    this.themeService.setTheme(event.value);
  }
}
