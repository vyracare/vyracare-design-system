import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { VcIconComponent } from '../icon/icon.component';
import type { VcSelectOption } from './model/select.model';

export type { VcSelectOption } from './model/select.model';

/** Select control integrated with Angular Forms. */
@Component({
  selector: 'vc-select',
  standalone: true,
  imports: [CommonModule, VcIconComponent],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VcSelectComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcSelectComponent implements ControlValueAccessor {
  /** Id forwarded to the internal select and label relationship. */
  @Input() id = '';
  /** Label rendered above the select. */
  @Input() label = '';
  /** Placeholder option shown before selection. */
  @Input() placeholder = 'Selecione';
  /** Supporting text rendered below the control. */
  @Input() hint = '';
  /** Error text rendered below the control and used for invalid state. */
  @Input() error = '';
  /** Marks the select as required for users and assistive technology. */
  @Input() required = false;
  /** Options rendered inside the select. */
  @Input() options: VcSelectOption[] = [];

  /** Current value synchronized through ControlValueAccessor. */
  value = '';
  /** Disabled state synchronized through ControlValueAccessor. */
  disabled = false;

  private onChange: (value: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  /** Writes external form values into the component. */
  writeValue(value: string | null): void {
    this.value = value ?? '';
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

  /** Emits the selected value through Angular Forms. */
  handleChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  /** Marks the control as touched. */
  markTouched(): void {
    this.onTouched();
  }
}
