import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light-theme' | 'dark-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;

  readonly themes: Theme[] = ['light-theme', 'dark-theme'];

  readonly currentTheme$ = new BehaviorSubject<Theme>(
    (localStorage.getItem('theme') as Theme) || 'dark-theme'
  );

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.setTheme(this.currentTheme$.value);
  }

  setTheme(theme: Theme): void {
    this.renderer.removeClass(document.body, this.currentTheme$.value);
    this.renderer.addClass(document.body, theme);
    this.currentTheme$.next(theme);
    localStorage.setItem('theme', theme);
  }
}
