import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import {
  VcDateTimeInputComponent,
  VcEmailInputComponent,
  VcPhoneInputComponent,
  VcPostalCodeInputComponent
} from './specialized-inputs.component';

describe('specialized inputs', () => {
  async function create<T>(component: Type<T>): Promise<ComponentFixture<T>> {
    await TestBed.configureTestingModule({ imports: [component] }).compileComponents();
    const fixture = TestBed.createComponent(component);
    fixture.detectChanges();
    expect(fixture.debugElement.injector.get(NG_VALUE_ACCESSOR)).toContain(fixture.componentInstance);
    return fixture;
  }

  afterEach(() => TestBed.resetTestingModule());

  it('formats telephone values and provides telephone defaults', async () => {
    const fixture = await create(VcPhoneInputComponent);
    const component = fixture.componentInstance;
    const change = jest.fn();
    component.registerOnChange(change);
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = '11987654321';
    input.dispatchEvent(new Event('input'));

    expect(input.type).toBe('tel');
    expect(input.placeholder).toBe('(00) 00000-0000');
    expect(change).toHaveBeenCalledWith('(11) 98765-4321');
  });

  it('normalizes email values', async () => {
    const fixture = await create(VcEmailInputComponent);
    const component = fixture.componentInstance;
    const change = jest.fn();
    component.registerOnChange(change);
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = ' Pessoa@Email.COM ';
    input.dispatchEvent(new Event('input'));

    expect(input.type).toBe('email');
    expect(change).toHaveBeenCalledWith('pessoa@email.com');
  });

  it('uses a native local date and time input', async () => {
    const fixture = await create(VcDateTimeInputComponent);
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    expect(input.type).toBe('datetime-local');
  });

  it('formats postal code values', async () => {
    const fixture = await create(VcPostalCodeInputComponent);
    const component = fixture.componentInstance;
    const change = jest.fn();
    component.registerOnChange(change);
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = '01001001';
    input.dispatchEvent(new Event('input'));

    expect(input.placeholder).toBe('00000-000');
    expect(change).toHaveBeenCalledWith('01001-001');
  });
});
