import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { VcIconComponent } from '../icon/icon.component';

@Component({
  selector: 'vc-card-button',
  standalone: true,
  imports: [CommonModule, VcIconComponent],
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcCardButtonComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() icon = '';
  @Input() badgeText = '';
  @Input() showIcon = true;
  @Input() showAction = true;
  @Input() actionIcon = 'chevron-right';
  @Input() href = '';
  @Input() target: '_self' | '_blank' = '_self';
  @Input() disabled = false;

  @Output() action = new EventEmitter<void>();

  get isLink(): boolean {
    return !!this.href;
  }

  get hasBadge(): boolean {
    return this.showIcon && (!!this.icon || !!this.badgeText);
  }

  handleClick(): void {
    if (!this.disabled) {
      this.action.emit();
    }
  }
}
