import { booleanAttribute, ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import type { VcButtonSize, VcButtonType, VcButtonVariant } from './model/button.model';

export type { VcButtonSize, VcButtonType, VcButtonVariant } from './model/button.model';

/** Action component used for primary, secondary and low-emphasis interactions. */
@Component({
  selector: 'vc-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcButtonComponent {
  /** Visual style used to communicate action hierarchy. */
  @Input() variant: VcButtonVariant = 'primary';
  /** Button size token. */
  @Input() size: VcButtonSize = 'md';
  /** Native type forwarded to the internal button element. */
  @Input() type: VcButtonType = 'button';
  /** Shows a spinner and disables the button interaction. */
  @Input() loading = false;
  /** Disables the button interaction. */
  @Input() disabled = false;
  /** Makes the button fill all available horizontal space. */
  @Input({ transform: booleanAttribute }) full = false;

  /** CSS classes applied to the host according to variant, size and width mode. */
  @HostBinding('class')
  get hostClasses(): string {
    const classes = ['vc-button', `vc-button--${this.variant}`, `vc-button--${this.size}`];

    if (this.full) {
      classes.push('vc-button--full');
    }

    return classes.join(' ');
  }

  /** Accessibility state exposed when the button is disabled or loading. */
  @HostBinding('attr.aria-disabled')
  get ariaDisabled(): boolean {
    return this.disabled || this.loading;
  }
}
