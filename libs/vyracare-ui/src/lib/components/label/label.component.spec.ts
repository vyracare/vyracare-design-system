import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcLabelComponent } from './label.component';

describe('VcLabelComponent', () => {
  let fixture: ComponentFixture<VcLabelComponent>;
  let component: VcLabelComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcLabelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcLabelComponent);
    component = fixture.componentInstance;
  });

  it('renders text', () => {
    component.text = 'Nome completo';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Nome completo');
  });

  it('shows required indicator', () => {
    component.text = 'Email';
    component.required = true;
    fixture.detectChanges();
    const required = fixture.nativeElement.querySelector('.vc-label__required');
    expect(required).toBeTruthy();
  });
});
