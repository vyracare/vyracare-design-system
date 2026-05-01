import { Component } from '@angular/core';

import {
  VcCardComponent,
  VcHeadingComponent,
  VcNavbarComponent,
  VcTextComponent,
  type VcNavbarAction,
  type VcNotificationItem
} from '@vyracare/design-system';

/** Playground page that demonstrates the wrapper-like top navigation built from design-system parts. */
@Component({
  selector: 'playground-navbar-page',
  standalone: true,
  imports: [VcCardComponent, VcHeadingComponent, VcNavbarComponent, VcTextComponent],
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss']
})
export class NavbarPageComponent {
  /** Sample notifications rendered by the navbar preview. */
  notifications: VcNotificationItem[] = [
    {
      id: 'agenda',
      title: 'Agenda de hoje',
      description: 'Voce possui 8 atendimentos confirmados.'
    },
    {
      id: 'financeiro',
      title: 'Financeiro',
      description: '3 boletos aguardando confirmacao.'
    },
    {
      id: 'suporte',
      title: 'Suporte',
      description: 'Novo chamado respondido por nossa equipe.'
    }
  ];

  /** Feedback text updated by interactions with the navbar. */
  lastInteraction = 'Nenhuma interacao registrada.';

  /** Updates the feedback text when the user types in the search field. */
  handleSearch(value: string): void {
    this.lastInteraction = `Busca: ${value || 'vazio'}`;
  }

  /** Updates the feedback text when a profile action is selected. */
  handleProfileAction(action: VcNavbarAction): void {
    this.lastInteraction = `Acao de perfil: ${action.label}`;
  }

  /** Updates the feedback text when a notification is selected. */
  handleNotification(item: VcNotificationItem): void {
    this.lastInteraction = `Notificacao: ${item.title}`;
  }

  /** Updates the feedback text when the footer notifications action is selected. */
  handleViewAll(): void {
    this.lastInteraction = 'Acao: ver todas as notificacoes';
  }
}
