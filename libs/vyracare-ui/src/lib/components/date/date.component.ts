import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { VcIconComponent } from '../icon/icon.component';

/** Date input with visual mask and Angular Forms integration. */
@Component({
  selector: 'vc-date',
  standalone: true,
  imports: [VcIconComponent],
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VcDateComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcDateComponent implements ControlValueAccessor {
  /** Id forwarded to the internal input and label relationship. */
  @Input() id = '';
  /** Label rendered above the date input. */
  @Input() label = '';
  /** Placeholder rendered by the internal input. */
  @Input() placeholder = 'dd/mm/aaaa';
  /** Supporting text rendered below the control. */
  @Input() hint = '';
  /** Error text rendered below the control and used for invalid state. */
  @Input() error = '';
  /** Marks the date input as required for users and assistive technology. */
  @Input() required = false;
  /** Bootstrap Icons name shown inside the control. */
  @Input() icon = 'calendar-check';
  /** Controls whether the leading icon is visible. */
  @Input() showIcon = true;

  /** Current masked value synchronized through ControlValueAccessor. */
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

  /** Applies the date mask and emits the new value. */
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

  private applyMask(raw: string): string {
    const digits = raw.replace(/\D/g, '').slice(0, 8);
    if (digits.length <= 2) {
      return digits;
    }
    if (digits.length <= 4) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  }
}
