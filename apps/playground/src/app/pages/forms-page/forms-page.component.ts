import { Component } from '@angular/core';

import {
  VcDateComponent,
  VcSelectComponent,
  VcHeadingComponent,
  VcInputComponent,
  VcSearchComponent,
  VcTextComponent
} from '@vyracare/design-system';

@Component({
  selector: 'playground-forms-page',
  standalone: true,
  imports: [
    VcDateComponent,
    VcSelectComponent,
    VcHeadingComponent,
    VcInputComponent,
    VcSearchComponent,
    VcTextComponent
  ],
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss']
})
export class FormsPageComponent {
  specialties = [
    { label: 'Cardiologia', value: 'cardio' },
    { label: 'Pediatria', value: 'pediatria' },
    { label: 'Clinica geral', value: 'clinica' }
  ];
}
