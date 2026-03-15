import { Component } from '@angular/core';

import { VcHeadingComponent, VcTextComponent } from '@vyracare/design-system';

@Component({
  selector: 'playground-grid-page',
  standalone: true,
  imports: [VcHeadingComponent, VcTextComponent],
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss']
})
export class GridPageComponent {}
