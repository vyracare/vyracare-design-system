import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcCardButtonComponent } from './card-button.component';

describe('VcCardButtonComponent', () => {
  let fixture: ComponentFixture<VcCardButtonComponent>;
  let component: VcCardButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcCardButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcCardButtonComponent);
    component = fixture.componentInstance;
  });

  it('renders title and subtitle', () => {
    component.title = 'Cadastro';
    component.subtitle = 'Prontuario';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Cadastro');
    expect(fixture.nativeElement.textContent).toContain('Prontuario');
  });

  it('emits action on click', () => {
    const spy = jest.spyOn(component.action, 'emit');
    component.title = 'Cadastro';
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('adds no-icon class when badge is hidden', () => {
    component.showIcon = false;
    fixture.detectChanges();

    const host = fixture.nativeElement.querySelector('.vc-card-button');
    expect(host.classList.contains('vc-card-button--no-icon')).toBe(true);
  });
});
