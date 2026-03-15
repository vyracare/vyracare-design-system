import { Component } from '@angular/core';

import {
  VcButtonComponent,
  VcCardComponent,
  VcCardButtonComponent,
  VcHeadingComponent,
  VcIconComponent,
  VcLabelComponent,
  VcListComponent,
  VcTextComponent
} from '@vyracare/design-system';

@Component({
  selector: 'playground-components-page',
  standalone: true,
  imports: [
    VcButtonComponent,
    VcCardComponent,
    VcCardButtonComponent,
    VcHeadingComponent,
    VcIconComponent,
    VcLabelComponent,
    VcListComponent,
    VcTextComponent
  ],
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent {
  loading = true;
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
    }
  ];
}
