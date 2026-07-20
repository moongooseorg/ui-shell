import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  imports: [MatSidenavModule, HeaderComponent, SideNavComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
