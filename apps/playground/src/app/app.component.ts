import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VcIconComponent } from '@vyracare/design-system';

@Component({
  selector: 'playground-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, VcIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme = signal<'light' | 'dark'>('light');
  themeIcon = computed(() => (this.theme() === 'dark' ? 'sun' : 'moon'));

  links = [
    { path: '', label: 'Visao geral' },
    { path: 'componentes', label: 'Componentes' },
    { path: 'formularios', label: 'Formularios' },
    { path: 'grid', label: 'Grid' },
    { path: 'tokens', label: 'Tokens' },
    { path: 'tipografia', label: 'Tipografia' },
    { path: 'espacamento', label: 'Espacamento' }
  ];

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

  toggleTheme(): void {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }
}
