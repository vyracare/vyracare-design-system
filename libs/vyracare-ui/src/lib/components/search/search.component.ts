import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { VcIconComponent } from '../icon/icon.component';

/** Search input with icon, labels and Angular Forms integration. */
@Component({
  selector: 'vc-search',
  standalone: true,
  imports: [VcIconComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VcSearchComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcSearchComponent implements ControlValueAccessor {
  /** Id forwarded to the internal input and label relationship. */
  @Input() id = '';
  /** Label rendered above the search input. */
  @Input() label = '';
  /** Placeholder rendered by the internal input. */
  @Input() placeholder = 'Buscar';
  /** Supporting text rendered below the control. */
  @Input() hint = '';
  /** Error text rendered below the control and used for invalid state. */
  @Input() error = '';
  /** Displays a dedicated icon button beside the field. */
  @Input() action = false;
  /** Accessible name announced for the optional action button. */
  @Input() actionLabel = 'Buscar';
  /** Emits the current value when the action is requested. */
  @Output() search = new EventEmitter<string>();

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

  /** Emits the typed search value through Angular Forms. */
  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  /** Marks the control as touched. */
  markTouched(): void {
    this.onTouched();
  }

  /** Emits a normalized search term from the button or Enter key. */
  submit(): void {
    if (!this.disabled) {
      this.search.emit(this.value.trim());
    }
  }
}
