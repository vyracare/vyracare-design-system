import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcCheckboxComponent } from './checkbox.component';
describe('VcCheckboxComponent', () => {
  let fixture: ComponentFixture<VcCheckboxComponent>;
  let component: VcCheckboxComponent;
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [VcCheckboxComponent] }).compileComponents(); fixture = TestBed.createComponent(VcCheckboxComponent); component = fixture.componentInstance; });
  it('handles interaction before form callbacks are registered', () => { expect(() => component.toggle({ target: { checked: false } } as unknown as Event)).not.toThrow(); expect(() => component.touch()).not.toThrow(); });
  it('propagates checked state', () => { const changed = jest.fn(); component.registerOnChange(changed); component.toggle({ target: { checked: true } } as unknown as Event); expect(changed).toHaveBeenCalledWith(true); });
  it('supports forms lifecycle and renders content', () => {
    const touched = jest.fn();
    component.registerOnTouched(touched);
    component.writeValue(true);
    component.setDisabledState(true);
    component.label = 'Consentimento';
    component.description = 'Confirmacao obrigatoria';
    component.error = 'Confirme';
    fixture.detectChanges();
    component.touch();
    expect(component.checked).toBe(true);
    expect(component.disabled).toBe(true);
    expect(touched).toHaveBeenCalled();
    expect(fixture.nativeElement.textContent).toContain('Consentimento');
    expect(fixture.nativeElement.textContent).toContain('Confirme');
  });
});
