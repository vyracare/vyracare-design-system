import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/** Multiline text control with consistent labels, hints and validation states. */
@Component({
  selector: 'vc-textarea',
  standalone: true,
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VcTextareaComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcTextareaComponent implements ControlValueAccessor {
  /** Id forwarded to the internal textarea and label relationship. */
  @Input() id = '';
  /** Label rendered above the textarea. */
  @Input() label = '';
  /** Placeholder rendered by the internal textarea. */
  @Input() placeholder = '';
  /** Visible text rows. */
  @Input() rows = 4;
  /** Optional native character limit. */
  @Input() maxLength: number | null = null;
  /** Supporting text rendered below the control. */
  @Input() hint = '';
  /** Error text rendered below the control and used for invalid state. */
  @Input() error = '';
  /** Marks the textarea as required for users and assistive technology. */
  @Input() required = false;
  /** Emits the current value when the native textarea loses focus. */
  @Output() blurred = new EventEmitter<string>();

  value = '';
  disabled = false;

  private onChange: (value: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  writeValue(value: string | null): void {
    this.value = value ?? '';
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
    this.value = (event.target as HTMLTextAreaElement).value;
    this.onChange(this.value);
  }

  markTouched(): void {
    this.onTouched();
    this.blurred.emit(this.value);
  }
}
