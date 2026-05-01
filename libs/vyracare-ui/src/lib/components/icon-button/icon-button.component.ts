import { booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { VcIconComponent } from '../icon/icon.component';
import type { VcButtonType } from '../button/model/button.model';
import type { VcIconButtonSize, VcIconButtonVariant } from './model/icon-button.model';

export type { VcIconButtonSize, VcIconButtonVariant } from './model/icon-button.model';

/** Compact action button that communicates intent through an icon. */
@Component({
  selector: 'vc-icon-button',
  standalone: true,
  imports: [VcIconComponent],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcIconButtonComponent {
  /** Bootstrap Icons name rendered inside the button. */
  @Input() icon = '';
  /** Accessibility label exposed by the button. */
  @Input() ariaLabel = '';
  /** Optional title rendered for browser tooltips. */
  @Input() title = '';
  /** Native button type. */
  @Input() type: VcButtonType = 'button';
  /** Visual size token. */
  @Input() size: VcIconButtonSize = 'md';
  /** Visual variant token. */
  @Input() variant: VcIconButtonVariant = 'soft';
  /** Disables the button interaction. */
  @Input({ transform: booleanAttribute }) disabled = false;
  /** Highlights the button as selected or open. */
  @Input({ transform: booleanAttribute }) active = false;

  /** Emits the native click event when the button is activated. */
  @Output() action = new EventEmitter<MouseEvent>();

  /** CSS classes applied to the internal button element. */
  get buttonClasses(): string[] {
    return [
      'vc-icon-button',
      `vc-icon-button--${this.size}`,
      `vc-icon-button--${this.variant}`,
      this.active ? 'is-active' : ''
    ].filter(Boolean);
  }

  /** Emits the click event when the component is enabled. */
  handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.action.emit(event);
    }
  }
}
