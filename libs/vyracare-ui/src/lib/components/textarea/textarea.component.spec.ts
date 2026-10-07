import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcTextareaComponent } from './textarea.component';

describe('VcTextareaComponent', () => {
  let fixture: ComponentFixture<VcTextareaComponent>;
  let component: VcTextareaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [VcTextareaComponent] }).compileComponents();
    fixture = TestBed.createComponent(VcTextareaComponent);
    component = fixture.componentInstance;
    component.id = 'clinical-notes';
    component.label = 'Observacoes';
    fixture.detectChanges();
  });

  it('creates an accessible multiline control', () => {
    const textarea = fixture.nativeElement.querySelector('textarea') as HTMLTextAreaElement;
    const label = fixture.nativeElement.querySelector('label') as HTMLLabelElement;

    expect(component).toBeTruthy();
    expect(textarea.id).toBe('clinical-notes');
    expect(label.htmlFor).toBe('clinical-notes');
  });

  it('propagates typed values through ControlValueAccessor', () => {
    const onChange = jest.fn();
    component.registerOnChange(onChange);
    const textarea = fixture.nativeElement.querySelector('textarea') as HTMLTextAreaElement;
    textarea.value = 'Evolucao registrada';
    textarea.dispatchEvent(new Event('input'));

    expect(onChange).toHaveBeenCalledWith('Evolucao registrada');
  });

  it('writes empty values and updates the disabled state', () => {
    component.writeValue(null);
    component.setDisabledState(true);
    fixture.detectChanges();

    const textarea = fixture.nativeElement.querySelector('textarea') as HTMLTextAreaElement;
    expect(textarea.value).toBe('');
    expect(textarea.disabled).toBe(true);
  });

  it('marks the control as touched and emits its current value on blur', () => {
    const onTouched = jest.fn();
    const emitSpy = jest.spyOn(component.blurred, 'emit');
    component.registerOnTouched(onTouched);
    component.writeValue('Retorno em 30 dias');

    component.markTouched();

    expect(onTouched).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalledWith('Retorno em 30 dias');
  });

  it('renders hint, required and error states', () => {
    fixture.componentRef.setInput('required', true);
    fixture.componentRef.setInput('hint', 'Inclua apenas informacoes clinicas.');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.vc-textarea__hint')?.textContent).toContain('Inclua');
    expect(fixture.nativeElement.querySelector('.vc-label__required')).toBeTruthy();

    fixture.componentRef.setInput('error', 'Campo obrigatorio.');
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea') as HTMLTextAreaElement;
    expect(fixture.nativeElement.querySelector('.vc-textarea__hint')).toBeNull();
    expect(fixture.nativeElement.querySelector('.vc-textarea__error')?.textContent).toContain('Campo obrigatorio');
    expect(textarea.getAttribute('aria-invalid')).toBe('true');
  });

  it('allows interaction before form callbacks are registered', () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'Sem formulario';

    expect(() => component.handleInput({ target: textarea } as unknown as Event)).not.toThrow();
    expect(() => component.markTouched()).not.toThrow();
    expect(component.value).toBe('Sem formulario');
  });
});
