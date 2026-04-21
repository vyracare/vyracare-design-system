import { Component } from '@angular/core';

import {
  VcCardComponent,
  VcHeadingComponent,
  VcIconComponent,
  VcLabelComponent,
  VcTextComponent
} from '@vyracare/design-system';

/** Playground page that demonstrates cards as content containers and metric blocks. */
@Component({
  selector: 'playground-card-page',
  standalone: true,
  imports: [VcCardComponent, VcHeadingComponent, VcIconComponent, VcLabelComponent, VcTextComponent],
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent {}
