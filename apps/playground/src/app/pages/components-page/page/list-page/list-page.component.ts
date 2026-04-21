import { Component } from '@angular/core';

import { VcCardComponent, VcHeadingComponent, VcListComponent, VcTextComponent } from '@vyracare/design-system';

/** Playground page that demonstrates list items with icons, descriptions and optional links. */
@Component({
  selector: 'playground-list-page',
  standalone: true,
  imports: [VcCardComponent, VcHeadingComponent, VcListComponent, VcTextComponent],
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent {
  /** Sample list items used to show common navigation rows. */
  listItems = [
    {
      title: 'Cadastro de pacientes',
      description: 'Prontuarios e historico clinico',
      icon: 'people'
    },
    {
      title: 'Agenda',
      description: 'Proximos atendimentos',
      icon: 'calendar-check',
      href: '#'
    },
    {
      title: 'Relatorios',
      description: 'Analise de operacao e resultados',
      icon: 'bar-chart'
    }
  ];
}
