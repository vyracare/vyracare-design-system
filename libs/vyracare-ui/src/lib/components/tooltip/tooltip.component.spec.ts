import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcTooltipComponent } from './tooltip.component';

describe('VcTooltipComponent', () => {
  let fixture: ComponentFixture<VcTooltipComponent>;
  let component: VcTooltipComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [VcTooltipComponent] }).compileComponents();
    fixture = TestBed.createComponent(VcTooltipComponent);
    component = fixture.componentInstance;
    component.text = 'Editar paciente';
  });

  it('shows and hides the floating description', () => {
    component.show();
    fixture.detectChanges();
    expect(component.visible()).toBe(true);
    expect(fixture.nativeElement.querySelector('[role="tooltip"]')?.textContent).toContain('Editar paciente');

    component.hide();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="tooltip"]')).toBeNull();
  });

  it('does not show an empty tooltip', () => {
    component.text = '   ';
    component.show();
    expect(component.visible()).toBe(false);
  });

  it('dismisses the tooltip with Escape', () => {
    component.show();
    component.handleEscape();
    expect(component.visible()).toBe(false);
  });

  it('applies the requested placement', () => {
    component.position = 'right';
    component.show();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="tooltip"]').classList).toContain('vc-tooltip--right');
  });
});
