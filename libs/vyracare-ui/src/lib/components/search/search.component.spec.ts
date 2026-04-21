import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcSearchComponent } from './search.component';

describe('VcSearchComponent', () => {
  let fixture: ComponentFixture<VcSearchComponent>;
  let component: VcSearchComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcSearchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcSearchComponent);
    component = fixture.componentInstance;
  });

  it('renders placeholder', () => {
    component.placeholder = 'Buscar pacientes';
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.placeholder).toBe('Buscar pacientes');
  });

  it('writes value on writeValue', () => {
    component.writeValue('Joana');
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('Joana');
  });

  it('emits change on input', () => {
    const onChange = jest.fn();
    component.registerOnChange(onChange);
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = 'teste';
    input.dispatchEvent(new Event('input'));
    expect(onChange).toHaveBeenCalledWith('teste');
  });

  it('handles input and touch before form callbacks are registered', () => {
    const input = document.createElement('input');
    input.value = 'sem callback';

    expect(() => component.handleInput({ target: input } as unknown as Event)).not.toThrow();
    expect(() => component.markTouched()).not.toThrow();
    expect(component.value).toBe('sem callback');
  });

  it('writes an empty value when writeValue receives null', () => {
    component.writeValue(null);
    fixture.detectChanges();
    expect(component.value).toBe('');
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

  it('marks touched when called directly', () => {
    const onTouched = jest.fn();
    component.registerOnTouched(onTouched);
    component.markTouched();
    expect(onTouched).toHaveBeenCalled();
  });
});
