import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export type VcIconSize = 'sm' | 'md' | 'lg' | 'xl' | number;

@Component({
  selector: 'vc-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcIconComponent {
  @Input() name = '';
  @Input() size: VcIconSize = 'md';
  @Input() ariaLabel = '';
  @Input() title = '';
  @Input() decorative = true;

  @HostBinding('style.--vc-icon-size')
  get iconSize(): string | null {
    return typeof this.size === 'number' ? `${this.size}px` : null;
  }

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
