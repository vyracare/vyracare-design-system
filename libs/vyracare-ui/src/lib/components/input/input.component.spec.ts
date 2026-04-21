import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcInputComponent } from './input.component';

describe('VcInputComponent', () => {
  let fixture: ComponentFixture<VcInputComponent>;
  let component: VcInputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('writes value to input', async () => {
    component.writeValue('Teste');
    fixture.detectChanges();
    await fixture.whenStable();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('Teste');
  });

  it('writes empty string when value is null', () => {
    component.writeValue(null);
    fixture.detectChanges();
    expect(component.value).toBe('');
  });

  it('emits change on input', () => {
    const onChange = jest.fn();
    component.registerOnChange(onChange);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = 'Novo valor';
    input.dispatchEvent(new Event('input'));

    expect(onChange).toHaveBeenCalledWith('Novo valor');
  });

  it('handles input and touch before form callbacks are registered', () => {
    const input = document.createElement('input');
    input.value = 'Valor sem callback';

    expect(() => component.handleInput({ target: input } as unknown as Event)).not.toThrow();
    expect(() => component.markTouched()).not.toThrow();
    expect(component.value).toBe('Valor sem callback');
  });

  it('applies phone mask on input', () => {
    component.mask = 'phone';
    const onChange = jest.fn();
    component.registerOnChange(onChange);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '11987654321';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('(11) 98765-4321');
    expect(onChange).toHaveBeenCalledWith('(11) 98765-4321');
  });

  it('applies phone mask for shorter values', () => {
    component.mask = 'phone';
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = '11';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('11');

    input.value = '119876';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('(11) 9876');

    input.value = '1198765432';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('(11) 9876-5432');
  });

  it('applies email mask on input', () => {
    component.mask = 'email';
    const onChange = jest.fn();
    component.registerOnChange(onChange);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = ' Teste@Email.COM ';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('teste@email.com');
    expect(onChange).toHaveBeenCalledWith('teste@email.com');
  });

  it('applies date mask on input', () => {
    component.mask = 'date';
    component.type = 'text';
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '01022026';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('01/02/2026');
  });

  it('applies date mask for short values', () => {
    component.mask = 'date';
    component.type = 'text';
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '01';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('01');

    input.value = '0102';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('01/02');
  });

  it('keeps raw value when type is date and mask is date', () => {
    component.mask = 'date';
    component.type = 'date';
    component.writeValue('2026-02-01');
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('2026-02-01');
  });

  it('applies password mask on input', () => {
    component.mask = 'password';
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = ' minha senha ';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('minhasenha');
  });

  it('returns correct inputMode for masks', () => {
    component.mask = 'phone';
    expect(component.inputMode).toBe('tel');
    component.mask = 'date';
    expect(component.inputMode).toBe('numeric');
    component.mask = 'email';
    expect(component.inputMode).toBe('email');
    component.mask = '';
    expect(component.inputMode).toBeNull();
  });

  it('marks touched on blur', () => {
    const onTouched = jest.fn();
    component.registerOnTouched(onTouched);
    component.markTouched();
    expect(onTouched).toHaveBeenCalled();
  });

  it('disables the input when setDisabledState is true', async () => {
    component.setDisabledState(true);
    fixture.detectChanges();
    await fixture.whenStable();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.disabled).toBe(true);
  });
});
