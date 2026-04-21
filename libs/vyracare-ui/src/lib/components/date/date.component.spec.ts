import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcDateComponent } from './date.component';

describe('VcDateComponent', () => {
  let fixture: ComponentFixture<VcDateComponent>;
  let component: VcDateComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcDateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcDateComponent);
    component = fixture.componentInstance;
  });

  it('renders label', () => {
    component.label = 'Data de nascimento';
    fixture.detectChanges();
    const label: HTMLLabelElement = fixture.nativeElement.querySelector('label');
    expect(label.textContent).toContain('Data de nascimento');
  });

  it('applies date mask on input', () => {
    const onChange = jest.fn();
    component.registerOnChange(onChange);
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '01012026';
    input.dispatchEvent(new Event('input'));

    expect(component.value).toBe('01/01/2026');
    expect(input.value).toBe('01/01/2026');
    expect(onChange).toHaveBeenCalledWith('01/01/2026');
  });

  it('handles input and touch before form callbacks are registered', () => {
    const input = document.createElement('input');
    input.value = '03032026';

    expect(() => component.handleInput({ target: input } as unknown as Event)).not.toThrow();
    expect(() => component.markTouched()).not.toThrow();
    expect(component.value).toBe('03/03/2026');
  });

  it('writes an empty masked value when writeValue receives null', () => {
    component.writeValue(null);
    fixture.detectChanges();
    expect(component.value).toBe('');
  });

  it('applies date mask for partial values', () => {
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = '01';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('01');

    input.value = '0102';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('01/02');
  });

  it('writes masked value on writeValue', () => {
    component.writeValue('02022026');
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('02/02/2026');
  });

  it('disables input when setDisabledState is true', () => {
    component.setDisabledState(true);
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.disabled).toBe(true);
  });

  it('marks touched on blur', () => {
    const onTouched = jest.fn();
    component.registerOnTouched(onTouched);
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('blur'));
    expect(onTouched).toHaveBeenCalled();
  });
});
