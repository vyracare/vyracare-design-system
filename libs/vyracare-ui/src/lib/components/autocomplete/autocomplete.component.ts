import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { VcAutocompleteOption } from './model/autocomplete.model';

export type { VcAutocompleteOption } from './model/autocomplete.model';

@Component({
  selector: 'vc-autocomplete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VcAutocompleteComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcAutocompleteComponent implements ControlValueAccessor {
  @Input() id = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() hint = '';
  @Input() error = '';
  @Input() loading = false;
  @Input() loadingText = 'Pesquisando...';
  @Input() emptyText = 'Nenhum resultado encontrado.';
  @Input() minSearchLength = 2;
  @Input() required = false;
  @Input() options: VcAutocompleteOption[] = [];
  @Output() searchChange = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<VcAutocompleteOption>();

  query = '';
  disabled = false;
  open = false;
  activeIndex = -1;

  private onChange: (value: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  writeValue(value: string | null): void {
    this.query = value ?? '';
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(disabled: boolean): void { this.disabled = disabled; this.cdr.markForCheck(); }

  handleInput(event: Event): void {
    this.query = (event.target as HTMLInputElement).value;
    this.onChange(this.query);
    this.open = this.query.trim().length >= this.minSearchLength;
    this.activeIndex = -1;
    this.searchChange.emit(this.query.trim());
  }

  handleFocus(): void { this.open = this.query.trim().length >= this.minSearchLength; }
  handleBlur(): void { this.onTouched(); setTimeout(() => { this.open = false; this.cdr.markForCheck(); }); }

  select(option: VcAutocompleteOption): void {
    if (option.disabled) return;
    this.query = option.label;
    this.onChange(option.label);
    this.selectionChange.emit(option);
    this.open = false;
  }

  handleKeydown(event: KeyboardEvent): void {
    const enabled = this.options.filter(option => !option.disabled);
    if (event.key === 'Escape') { this.open = false; return; }
    if (!this.open || enabled.length === 0) return;
    if (event.key === 'ArrowDown') { event.preventDefault(); this.activeIndex = (this.activeIndex + 1) % enabled.length; }
    if (event.key === 'ArrowUp') { event.preventDefault(); this.activeIndex = (this.activeIndex - 1 + enabled.length) % enabled.length; }
    if (event.key === 'Enter' && this.activeIndex >= 0) { event.preventDefault(); this.select(enabled[this.activeIndex]); }
  }

  optionId(index: number): string { return `${this.id || 'autocomplete'}-option-${index}`; }
}
