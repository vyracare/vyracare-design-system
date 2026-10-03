import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcAutocompleteComponent } from './autocomplete.component';

describe('VcAutocompleteComponent', () => {
  let fixture: ComponentFixture<VcAutocompleteComponent>;
  let component: VcAutocompleteComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [VcAutocompleteComponent] }).compileComponents();
    fixture = TestBed.createComponent(VcAutocompleteComponent);
    component = fixture.componentInstance;
  });

  it('handles interaction before form callbacks are registered', () => {
    jest.useFakeTimers();
    expect(() => component.select({ value: '1', label: 'Maria' })).not.toThrow();
    expect(() => component.handleBlur()).not.toThrow();
    jest.runAllTimers();
    jest.useRealTimers();
  });

  it('emits search text and opens after minimum length', () => {
    const emit = jest.spyOn(component.searchChange, 'emit');
    component.handleInput({ target: { value: 'ma' } } as unknown as Event);
    expect(component.open).toBe(true);
    expect(emit).toHaveBeenCalledWith('ma');
  });

  it('selects an option and updates the form value', () => {
    const changed = jest.fn();
    component.registerOnChange(changed);
    component.select({ value: '1', label: 'Maria' });
    expect(changed).toHaveBeenCalledWith('Maria');
    expect(component.query).toBe('Maria');
  });

  it('supports forms lifecycle, focus and blur', () => {
    jest.useFakeTimers();
    const touched = jest.fn();
    component.registerOnTouched(touched);
    component.writeValue('Maria');
    component.setDisabledState(true);
    expect(component.query).toBe('Maria');
    expect(component.disabled).toBe(true);
    component.setDisabledState(false);
    component.handleFocus();
    expect(component.open).toBe(true);
    component.handleBlur();
    jest.runAllTimers();
    expect(touched).toHaveBeenCalled();
    expect(component.open).toBe(false);
    jest.useRealTimers();
  });

  it('does not open for a short query and ignores disabled options', () => {
    component.handleInput({ target: { value: 'm' } } as unknown as Event);
    expect(component.open).toBe(false);
    component.query = 'original';
    component.select({ value: '1', label: 'Disabled', disabled: true });
    expect(component.query).toBe('original');
  });

  it('supports keyboard navigation, selection and escape', () => {
    component.options = [
      { value: '1', label: 'Disabled', disabled: true },
      { value: '2', label: 'Maria' },
      { value: '3', label: 'Marina' }
    ];
    component.open = true;
    const preventDefault = jest.fn();
    component.handleKeydown({ key: 'ArrowDown', preventDefault } as unknown as KeyboardEvent);
    expect(component.activeIndex).toBe(0);
    component.handleKeydown({ key: 'ArrowUp', preventDefault } as unknown as KeyboardEvent);
    expect(component.activeIndex).toBe(1);
    component.handleKeydown({ key: 'Enter', preventDefault } as unknown as KeyboardEvent);
    expect(component.query).toBe('Marina');
    component.open = true;
    component.handleKeydown({ key: 'Escape' } as KeyboardEvent);
    expect(component.open).toBe(false);
    expect(component.optionId(2)).toContain('option-2');
  });

  it('renders loading, empty, error and option states', () => {
    component.id = 'employee';
    component.label = 'Funcionario';
    component.required = true;
    component.query = 'ma';
    component.open = true;
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Pesquisando');
    fixture.componentRef.setInput('loading', false);
    fixture.componentRef.setInput('error', 'Falha');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Falha');
    fixture.componentRef.setInput('error', '');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Nenhum resultado');
    fixture.componentRef.setInput('options', [{ value: '1', label: 'Maria', description: 'maria@email.com' }]);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('maria@email.com');
    expect(fixture.nativeElement.querySelector('[role="listbox"]')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('[role="option"]')?.getAttribute('aria-selected')).toBe('false');
    expect(fixture.nativeElement.querySelector('.vc-autocomplete__option-action')?.textContent).toContain('Selecionar');
  });
});
