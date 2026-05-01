import { Component } from '@angular/core';

import { VcAvatarComponent, VcCardComponent, VcHeadingComponent, VcTextComponent } from '@vyracare/design-system';

/** Playground page that demonstrates avatar sizing, tones and fallback behavior. */
@Component({
  selector: 'playground-avatar-page',
  standalone: true,
  imports: [VcAvatarComponent, VcCardComponent, VcHeadingComponent, VcTextComponent],
  templateUrl: './avatar-page.component.html',
  styleUrls: ['./avatar-page.component.scss']
})
export class AvatarPageComponent {}
