import { Component } from '@angular/core';

import {
  VcCardComponent,
  VcHeadingComponent,
  VcNotificationsComponent,
  VcTextComponent,
  type VcNotificationItem
} from '@vyracare/design-system';

/** Playground page that demonstrates the notifications dropdown behavior and content. */
@Component({
  selector: 'playground-notifications-page',
  standalone: true,
  imports: [VcCardComponent, VcHeadingComponent, VcNotificationsComponent, VcTextComponent],
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent {
  /** Sample items rendered by the notifications dropdown. */
  notifications: VcNotificationItem[] = [
    {
      id: 'agenda',
      title: 'Agenda de hoje',
      description: 'Voce possui 8 atendimentos confirmados.',
      time: 'Agora'
    },
    {
      id: 'financeiro',
      title: 'Financeiro',
      description: '3 boletos aguardando confirmacao.',
      time: '5 min'
    },
    {
      id: 'suporte',
      title: 'Suporte',
      description: 'Novo chamado respondido por nossa equipe.',
      time: '12 min'
    }
  ];

  /** Last clicked notification title, used to demonstrate emitted events. */
  lastSelection = 'Nenhuma notificacao selecionada.';

  /** Updates the preview feedback when a notification is selected. */
  handleSelection(item: VcNotificationItem): void {
    this.lastSelection = `Selecionada: ${item.title}`;
  }

  /** Updates the preview feedback when the footer action is selected. */
  handleViewAll(): void {
    this.lastSelection = 'Acao: ver todas as notificacoes';
  }
}
