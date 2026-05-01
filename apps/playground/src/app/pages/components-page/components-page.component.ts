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
      title: 'Avatar',
      description: 'Representacao de usuario com iniciais, imagem e variacoes de tamanho.',
      icon: 'person-circle',
      path: '/componentes/avatar'
    },
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
      title: 'Icon Button',
      description: 'Acao compacta para busca, menus, alertas e navegacao contextual.',
      icon: 'app-indicator',
      path: '/componentes/icon-button'
    },
    {
      title: 'List',
      description: 'Lista vertical para opcoes, atalhos e conteudos navegaveis.',
      icon: 'list-check',
      path: '/componentes/list'
    },
    {
      title: 'Navbar',
      description: 'Topo de navegacao com marca, busca, notificacoes e menu de perfil.',
      icon: 'layout-text-sidebar',
      path: '/componentes/navbar'
    },
    {
      title: 'Notifications',
      description: 'Bell dropdown para notificacoes recentes e acoes rapidas.',
      icon: 'bell',
      path: '/componentes/notifications'
    },
    {
      title: 'Sidebar',
      description: 'Navegacao lateral com agrupamento por contexto e card de suporte.',
      icon: 'layout-sidebar-inset',
      path: '/componentes/sidebar'
    }
  ];
}
