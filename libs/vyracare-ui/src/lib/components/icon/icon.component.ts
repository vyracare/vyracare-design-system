import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import type { VcIconSize } from './model/icon.model';

export type { VcIconSize } from './model/icon.model';

/** Bootstrap Icons wrapper with design-system sizing and accessibility defaults. */
@Component({
  selector: 'vc-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcIconComponent {
  /** Bootstrap Icons name without the `bi-` prefix. */
  @Input() name = '';
  /** Size token or custom pixel value. */
  @Input() size: VcIconSize = 'md';
  /** Accessible label used when the icon is meaningful. */
  @Input() ariaLabel = '';
  /** Optional title rendered by the icon template. */
  @Input() title = '';
  /** Hides the icon from assistive technology when true. */
  @Input() decorative = true;

  /** Custom CSS variable used when size is passed as a number. */
  @HostBinding('style.--vc-icon-size')
  get iconSize(): string | null {
    return typeof this.size === 'number' ? `${this.size}px` : null;
  }

  /** CSS classes generated from icon name and size token. */
  get iconClasses(): string[] {
    const classes = ['vc-icon', 'bi'];

    if (this.name) {
      classes.push(`bi-${this.name}`);
    }

    if (typeof this.size === 'string') {
      classes.push(`vc-icon--${this.size}`);
    }

    return classes;
  }
}
