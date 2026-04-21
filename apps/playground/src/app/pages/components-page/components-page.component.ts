import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  VcCardComponent,
  VcHeadingComponent,
  VcIconComponent,
  VcTextComponent
} from '@vyracare/design-system';

import type { ComponentLink } from './model/component-link.model';

/** Index page that links to each component-focused playground page. */
@Component({
  selector: 'playground-components-page',
  standalone: true,
  imports: [
    RouterLink,
    VcCardComponent,
    VcHeadingComponent,
    VcIconComponent,
    VcTextComponent
  ],
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent {
  /** Shortcut cards rendered in the components overview. */
  components: ComponentLink[] = [
    {
      title: 'Button',
      description: 'Acoes principais, secundarias, ghost e full width.',
      icon: 'cursor',
      path: '/componentes/button'
    },
    {
      title: 'Card Button',
      description: 'Card clicavel para atalhos e navegacao de alto destaque.',
      icon: 'layout-text-window-reverse',
      path: '/componentes/card-button'
    },
    {
      title: 'Card',
      description: 'Container visual para dados, indicadores e agrupamentos.',
      icon: 'card-text',
      path: '/componentes/card'
    },
    {
      title: 'List',
      description: 'Lista vertical para opcoes, atalhos e conteudos navegaveis.',
      icon: 'list-check',
      path: '/componentes/list'
    }
  ];
}
