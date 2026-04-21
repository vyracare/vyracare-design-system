import { Component } from '@angular/core';

import { VcHeadingComponent, VcTextComponent } from '@vyracare/design-system';

/** Playground page that documents typography families, scale and weights. */
@Component({
  selector: 'playground-typography-page',
  standalone: true,
  imports: [VcHeadingComponent, VcTextComponent],
  templateUrl: './typography-page.component.html',
  styleUrls: ['./typography-page.component.scss']
})
export class TypographyPageComponent {
  /** Font family tokens rendered in the typography overview. */
  fontFamilies = [
    { token: '--vc-font-base', label: 'Base', value: "var(--vc-font-base)" },
    { token: '--vc-font-heading', label: 'Heading', value: "var(--vc-font-heading)" }
  ];

  /** Font-size tokens rendered with sample previews. */
  scale = [
    { token: '--vc-font-size-3xl', label: 'Display', value: '34px', preview: '3XL / 34px' },
    { token: '--vc-font-size-2xl', label: 'Hero', value: '28px', preview: '2XL / 28px' },
    { token: '--vc-font-size-xl', label: 'Section', value: '22px', preview: 'XL / 22px' },
    { token: '--vc-font-size-lg', label: 'Lead', value: '18px', preview: 'LG / 18px' },
    { token: '--vc-font-size-md', label: 'Body', value: '16px', preview: 'MD / 16px' },
    { token: '--vc-font-size-sm', label: 'Support', value: '14px', preview: 'SM / 14px' },
    { token: '--vc-font-size-xs', label: 'Caption', value: '12px', preview: 'XS / 12px' }
  ];

  /** Font-weight tokens rendered with numeric values. */
  weights = [
    { token: '--vc-font-weight-regular', label: 'Regular', value: 400 },
    { token: '--vc-font-weight-medium', label: 'Medium', value: 500 },
    { token: '--vc-font-weight-semibold', label: 'Semibold', value: 600 },
    { token: '--vc-font-weight-bold', label: 'Bold', value: 700 }
  ];
}
