import { Component } from '@angular/core';

import { VcCardComponent, VcHeadingComponent, VcIconButtonComponent, VcTextComponent } from '@vyracare/design-system';

/** Playground page that demonstrates icon button variants, states and sizes. */
@Component({
  selector: 'playground-icon-button-page',
  standalone: true,
  imports: [VcCardComponent, VcHeadingComponent, VcIconButtonComponent, VcTextComponent],
  templateUrl: './icon-button-page.component.html',
  styleUrls: ['./icon-button-page.component.scss']
})
export class IconButtonPageComponent {}
