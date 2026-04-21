import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VcIconComponent } from '@vyracare/design-system';

import type { PlaygroundLink, PlaygroundTheme } from './model/playground-link.model';

@Component({
  selector: 'playground-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, VcIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** Active visual theme for the playground shell. */
  theme = signal<PlaygroundTheme>('light');

  /** Icon name that reflects the action available for the current theme. */
  themeIcon = computed(() => (this.theme() === 'dark' ? 'sun' : 'moon'));

  /** Top-level links rendered in the lateral menu. */
  links: PlaygroundLink[] = [
    { path: 'formularios', label: 'Formularios' },
    { path: 'grid', label: 'Grid' },
    { path: 'tokens', label: 'Tokens' },
    { path: 'tipografia', label: 'Tipografia' },
    { path: 'espacamento', label: 'Espacamento' }
  ];

  /** Links nested under the Components dropdown in the lateral menu. */
  componentLinks: PlaygroundLink[] = [
    { path: 'componentes', label: 'Todos' },
    { path: 'componentes/button', label: 'Button' },
    { path: 'componentes/card-button', label: 'Card Button' },
    { path: 'componentes/card', label: 'Card' },
    { path: 'componentes/list', label: 'List' }
  ];

  /** Controls the open state of the Components dropdown. */
  componentsMenuOpen = signal(true);

  constructor() {
    effect(() => {
      if (typeof document === 'undefined') {
        return () => undefined;
      }
      const root = document.documentElement;
      root.classList.add('theme-transition');
      const timeout = window.setTimeout(() => {
        root.classList.remove('theme-transition');
      }, 260);

      if (this.theme() === 'dark') {
        root.setAttribute('data-theme', 'dark');
      } else {
        root.removeAttribute('data-theme');
      }

      return () => {
        window.clearTimeout(timeout);
      };
    });
  }

  /** Toggles between light and dark themes in the playground shell. */
  toggleTheme(): void {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  /** Opens or closes the Components dropdown in the lateral menu. */
  toggleComponentsMenu(): void {
    this.componentsMenuOpen.update((current) => !current);
  }
}
