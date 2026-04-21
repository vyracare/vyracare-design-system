import { Component } from '@angular/core';

import { VcHeadingComponent, VcTextComponent } from '@vyracare/design-system';

/** Playground page that documents spacing tokens and their pixel values. */
@Component({
  selector: 'playground-spacing-page',
  standalone: true,
  imports: [VcHeadingComponent, VcTextComponent],
  templateUrl: './spacing-page.component.html',
  styleUrls: ['./spacing-page.component.scss']
})
export class SpacingPageComponent {
  /** Spacing tokens rendered in the playground examples. */
  spaces = [
    { token: '--vc-space-xs', label: 'XS', value: '4px' },
    { token: '--vc-space-sm', label: 'SM', value: '8px' },
    { token: '--vc-space-md', label: 'MD', value: '12px' },
    { token: '--vc-space-lg', label: 'LG', value: '16px' },
    { token: '--vc-space-xl', label: 'XL', value: '24px' },
    { token: '--vc-space-2xl', label: '2XL', value: '32px' },
    { token: '--vc-space-3xl', label: '3XL', value: '40px' }
  ];
}
