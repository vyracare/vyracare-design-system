import { Component } from '@angular/core';

import { VcHeadingComponent, VcTextComponent } from '@vyracare/design-system';

@Component({
  selector: 'playground-home-page',
  standalone: true,
  imports: [VcHeadingComponent, VcTextComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
