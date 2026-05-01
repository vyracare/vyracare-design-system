import { Component } from '@angular/core';

import {
  VcCardComponent,
  VcHeadingComponent,
  VcSidebarComponent,
  VcTextComponent,
  type VcSidebarGroup,
  type VcSidebarItem,
  type VcSidebarSupport
} from '@vyracare/design-system';

/** Playground page that demonstrates the lateral navigation structure used by the shell. */
@Component({
  selector: 'playground-sidebar-page',
  standalone: true,
  imports: [VcCardComponent, VcHeadingComponent, VcSidebarComponent, VcTextComponent],
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss']
})
export class SidebarPageComponent {
  /** Grouped links that mirror the shell navigation pattern. */
  groups: VcSidebarGroup[] = [
    {
      label: 'Area Clinica',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: 'grid', active: true },
        { id: 'agenda', label: 'Agenda', icon: 'calendar3' },
        { id: 'pacientes', label: 'Pacientes', icon: 'people' }
      ]
    },
    {
      label: 'Operacional',
      items: [
        { id: 'financeiro', label: 'Financeiro', icon: 'cash-stack' },
        { id: 'relatorios', label: 'Relatorios', icon: 'bar-chart' },
        { id: 'configuracoes', label: 'Configuracoes', icon: 'gear' }
      ]
    }
  ];

  /** Support card content rendered at the end of the sidebar. */
  support: VcSidebarSupport = {
    title: 'Precisa de ajuda?',
    description: 'Nossa equipe esta pronta para apoiar sua operacao.',
    linkLabel: 'suporte@vyracare.com',
    linkHref: 'mailto:suporte@vyracare.com'
  };

  /** Current active item identifier used by the sidebar preview. */
  selectedItemId = 'dashboard';
  /** Current selection shown in the page feedback text. */
  selectedItemLabel = 'Dashboard';

  /** Updates the selected item label when a menu entry is chosen. */
  handleSelection(item: VcSidebarItem): void {
    this.selectedItemId = item.id;
    this.selectedItemLabel = item.label;
  }
}
