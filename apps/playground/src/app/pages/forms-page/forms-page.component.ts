import { Component } from '@angular/core';

import {
  VcDateComponent,
  VcSelectComponent,
  VcHeadingComponent,
  VcInputComponent,
  VcSearchComponent,
  VcTextComponent
} from '@vyracare/design-system';

/** Playground page that demonstrates form controls and Angular Forms-ready inputs. */
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
  /** Select options used to demonstrate specialty selection. */
  specialties = [
    { label: 'Cardiologia', value: 'cardio' },
    { label: 'Pediatria', value: 'pediatria' },
    { label: 'Clinica geral', value: 'clinica' }
  ];
}
