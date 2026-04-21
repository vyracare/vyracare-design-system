import { Component } from '@angular/core';

import { VcButtonComponent, VcCardComponent, VcHeadingComponent, VcTextComponent } from '@vyracare/design-system';

/** Playground page that demonstrates button variants, sizes, states and full width usage. */
@Component({
  selector: 'playground-button-page',
  standalone: true,
  imports: [VcButtonComponent, VcCardComponent, VcHeadingComponent, VcTextComponent],
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss']
})
export class ButtonPageComponent {
  /** Static loading state used to demonstrate the loading button. */
  loading = true;
}
