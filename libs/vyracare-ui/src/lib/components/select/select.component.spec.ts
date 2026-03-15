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
    const options = fixture.nativeElement.querySelectorAll('option');

    expect(label.textContent).toContain('Especialidade');
    expect(options.length).toBeGreaterThanOrEqual(2);
  });

  it('updates value on change', () => {
    component.options = [{ label: 'Cardiologia', value: 'cardio' }];
    const onChange = jest.fn();
    component.registerOnChange(onChange);
    fixture.detectChanges();

    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    select.value = 'cardio';
    select.dispatchEvent(new Event('change'));

    expect(component.value).toBe('cardio');
    expect(onChange).toHaveBeenCalledWith('cardio');
  });

  it('writes value on writeValue', () => {
    component.options = [{ label: 'Cardiologia', value: 'cardio' }];
    component.writeValue('cardio');
    fixture.detectChanges();

    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select.value).toBe('cardio');
  });

  it('disables select when setDisabledState is true', () => {
    component.setDisabledState(true);
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select.disabled).toBe(true);
  });

  it('marks touched on blur', () => {
    const onTouched = jest.fn();
    component.registerOnTouched(onTouched);
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    select.dispatchEvent(new Event('blur'));
    expect(onTouched).toHaveBeenCalled();
  });
});
