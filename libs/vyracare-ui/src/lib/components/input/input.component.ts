import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import type { VcInputMask, VcInputType } from './model/input.model';

export type { VcInputMask, VcInputType } from './model/input.model';

/** Form input with labels, hints, validation messaging and optional masks. */
@Component({
  selector: 'vc-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VcInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcInputComponent implements ControlValueAccessor {
  /** Id forwarded to the internal input and label relationship. */
  @Input() id = '';
  /** Label rendered above the input. */
  @Input() label = '';
  /** Placeholder rendered by the internal input. */
  @Input() placeholder = '';
  /** Native input type. */
  @Input() type: VcInputType = 'text';
  /** Optional mask applied while the user types. */
  @Input() mask: VcInputMask = '';
  /** Supporting text rendered below the control. */
  @Input() hint = '';
  /** Error text rendered below the control and used for invalid state. */
  @Input() error = '';
  /** Marks the input as required for users and assistive technology. */
  @Input() required = false;

  /** Current value synchronized through ControlValueAccessor. */
  value = '';
  /** Disabled state synchronized through ControlValueAccessor. */
  disabled = false;

  private onChange: (value: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  /** Writes external form values into the component. */
  writeValue(value: string | null): void {
    this.value = this.applyMask(value ?? '');
    this.cdr.markForCheck();
  }

  /** Stores the Angular Forms change callback. */
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /** Stores the Angular Forms touched callback. */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /** Updates the disabled state from Angular Forms. */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  /** Applies the configured mask and emits the new value. */
  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const masked = this.applyMask(target.value);
    this.value = masked;
    target.value = masked;
    this.onChange(this.value);
  }

  /** Marks the control as touched. */
  markTouched(): void {
    this.onTouched();
  }

  /** Input mode hint derived from the active mask. */
  get inputMode(): string | null {
    switch (this.mask) {
      case 'phone':
        return 'tel';
      case 'date':
        return 'numeric';
      case 'email':
        return 'email';
      default:
        return null;
    }
  }

  private applyMask(raw: string): string {
    if (!this.mask) {
      return raw;
    }

    if (this.mask === 'email') {
      return raw.replace(/\s+/g, '').toLowerCase();
    }

    if (this.mask === 'password') {
      return raw.replace(/\s+/g, '');
    }

    if (this.mask === 'date') {
      if (this.type === 'date') {
        return raw;
      }
      const digits = raw.replace(/\D/g, '').slice(0, 8);
      if (digits.length <= 2) {
        return digits;
      }
      if (digits.length <= 4) {
        return `${digits.slice(0, 2)}/${digits.slice(2)}`;
      }
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
    }

    if (this.mask === 'phone') {
      const digits = raw.replace(/\D/g, '').slice(0, 11);
      if (digits.length <= 2) {
        return digits;
      }
      if (digits.length <= 6) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      }
      if (digits.length <= 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
      }
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }

    return raw;
  }
}
