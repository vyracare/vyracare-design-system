import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vc-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VcCheckboxComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcCheckboxComponent implements ControlValueAccessor {
  @Input() id = '';
  @Input() label = '';
  @Input() description = '';
  @Input() error = '';
  checked = false;
  disabled = false;
  private onChange: (value: boolean) => void = () => undefined;
  private onTouched: () => void = () => undefined;
  constructor(private readonly cdr: ChangeDetectorRef) {}
  writeValue(value: boolean | null): void { this.checked = !!value; this.cdr.markForCheck(); }
  registerOnChange(fn: (value: boolean) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(disabled: boolean): void { this.disabled = disabled; this.cdr.markForCheck(); }
  toggle(event: Event): void { this.checked = (event.target as HTMLInputElement).checked; this.onChange(this.checked); }
  touch(): void { this.onTouched(); }
}
