import { Component } from '@angular/core';

import { VcCardComponent, VcCardButtonComponent, VcHeadingComponent, VcTextComponent } from '@vyracare/design-system';

/** Playground page that demonstrates card-button navigation and shortcut use cases. */
@Component({
  selector: 'playground-card-button-page',
  standalone: true,
  imports: [VcCardComponent, VcCardButtonComponent, VcHeadingComponent, VcTextComponent],
  templateUrl: './card-button-page.component.html',
  styleUrls: ['./card-button-page.component.scss']
})
export class CardButtonPageComponent {}
