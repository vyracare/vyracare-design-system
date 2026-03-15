import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export type VcButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type VcButtonSize = 'sm' | 'md' | 'lg';
export type VcButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'vc-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcButtonComponent {
  @Input() variant: VcButtonVariant = 'primary';
  @Input() size: VcButtonSize = 'md';
  @Input() type: VcButtonType = 'button';
  @Input() loading = false;
  @Input() disabled = false;

  @HostBinding('class')
  get hostClasses(): string {
    return `vc-button vc-button--${this.variant} vc-button--${this.size}`;
  }

  @HostBinding('attr.aria-disabled')
  get ariaDisabled(): boolean {
    return this.disabled || this.loading;
  }
}
