import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcSelectComponent } from './select.component';

describe('VcSelectComponent', () => {
  let fixture: ComponentFixture<VcSelectComponent>;
  let component: VcSelectComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcSelectComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcSelectComponent);
    component = fixture.componentInstance;
  });

  it('renders label and options', () => {
    component.label = 'Especialidade';
    component.options = [
      { label: 'Cardiologia', value: 'cardio' },
      { label: 'Pediatria', value: 'pediatria' }
    ];
    fixture.detectChanges();

    const label: HTMLLabelElement = fixture.nativeElement.querySelector('label');
    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('.vc-select__trigger');
    trigger.click();
    fixture.detectChanges();
    const options = fixture.nativeElement.querySelectorAll('.vc-select__options button');

    expect(label.textContent).toContain('Especialidade');
    expect(options.length).toBe(2);
  });

  it('updates value on change', () => {
    component.options = [{ label: 'Cardiologia', value: 'cardio' }];
    const onChange = jest.fn();
    component.registerOnChange(onChange);
    fixture.detectChanges();

    component.selectOption('cardio');

    expect(component.value).toBe('cardio');
    expect(onChange).toHaveBeenCalledWith('cardio');
  });

  it('handles change and touch before form callbacks are registered', () => {
    expect(() => component.selectOption('cardio')).not.toThrow();
    expect(() => component.markTouched()).not.toThrow();
    expect(component.value).toBe('cardio');
  });

  it('writes an empty value when writeValue receives null', () => {
    component.writeValue(null);
    fixture.detectChanges();
    expect(component.value).toBe('');
  });

  it('writes value on writeValue', () => {
    component.options = [{ label: 'Cardiologia', value: 'cardio' }];
    component.writeValue('cardio');
    fixture.detectChanges();

    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('.vc-select__trigger');
    expect(trigger.textContent).toContain('Cardiologia');
  });

  it('disables select when setDisabledState is true', () => {
    component.setDisabledState(true);
    fixture.detectChanges();
    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('.vc-select__trigger');
    expect(trigger.disabled).toBe(true);
  });

  it('marks touched on blur', () => {
    const onTouched = jest.fn();
    component.registerOnTouched(onTouched);
    fixture.detectChanges();
    component.markTouched();
    expect(onTouched).toHaveBeenCalled();
  });

  it('toggles only while enabled and ignores disabled options', () => {
    component.toggle();
    expect(component.open).toBe(true);
    component.selectOption('blocked', true);
    expect(component.value).toBe('');
    component.setDisabledState(true);
    component.open = false;
    component.toggle();
    expect(component.open).toBe(false);
    expect(component.selectedLabel).toBe(component.placeholder);
  });
});
