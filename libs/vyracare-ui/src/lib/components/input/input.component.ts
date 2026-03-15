import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() id = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'tel' | 'number' | 'date' = 'text';
  @Input() mask: 'phone' | 'email' | 'date' | 'password' | '' = '';
  @Input() hint = '';
  @Input() error = '';
  @Input() required = false;

  value = '';
  disabled = false;

  private onChange: (value: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  writeValue(value: string | null): void {
    this.value = this.applyMask(value ?? '');
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const masked = this.applyMask(target.value);
    this.value = masked;
    target.value = masked;
    this.onChange(this.value);
  }

  markTouched(): void {
    this.onTouched();
  }

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
