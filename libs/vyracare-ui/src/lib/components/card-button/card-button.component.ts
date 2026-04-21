import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { VcIconComponent } from '../icon/icon.component';
import type { VcCardButtonTarget } from './model/card-button.model';

export type { VcCardButtonTarget } from './model/card-button.model';

/** Large clickable card used for shortcuts and navigation options. */
@Component({
  selector: 'vc-card-button',
  standalone: true,
  imports: [CommonModule, VcIconComponent],
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcCardButtonComponent {
  /** Primary text shown inside the card button. */
  @Input() title = '';
  /** Supporting text shown below the title. */
  @Input() subtitle = '';
  /** Bootstrap Icons name used in the leading badge. */
  @Input() icon = '';
  /** Text fallback rendered in the badge when no icon is provided. */
  @Input() badgeText = '';
  /** Controls whether the leading icon/badge is visible. */
  @Input() showIcon = true;
  /** Controls whether the trailing action affordance is visible. */
  @Input() showAction = true;
  /** Bootstrap Icons name used for the trailing action affordance. */
  @Input() actionIcon = 'chevron-right';
  /** Optional href that renders the component as an anchor instead of a button. */
  @Input() href = '';
  /** Anchor target used when href is provided. */
  @Input() target: VcCardButtonTarget = '_self';
  /** Disables button mode and suppresses action events. */
  @Input() disabled = false;

  /** Emits when the card button is activated in button mode. */
  @Output() action = new EventEmitter<void>();

  /** Whether the component should render as an anchor. */
  get isLink(): boolean {
    return !!this.href;
  }

  /** Whether a leading badge should be rendered. */
  get hasBadge(): boolean {
    return this.showIcon && (!!this.icon || !!this.badgeText);
  }

  /** Emits the action event when the component is enabled. */
  handleClick(): void {
    if (!this.disabled) {
      this.action.emit();
    }
  }
}
