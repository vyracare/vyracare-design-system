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
    fixture.detectChanges();
    jest.spyOn(fixture.nativeElement.querySelector('.vc-tooltip-trigger'), 'getBoundingClientRect').mockReturnValue({
      left: 100,
      right: 140,
      top: 80,
      bottom: 120,
      width: 40,
      height: 40,
      x: 100,
      y: 80,
      toJSON: () => ({})
    });
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
    expect(component.coordinates()).toEqual({ left: 150, top: 100 });
  });

  it.each([
    ['bottom', { left: 120, top: 130 }],
    ['left', { left: 90, top: 100 }]
  ] as const)('calculates coordinates for the %s placement', (position, expected) => {
    component.position = position;
    component.show();

    expect(component.coordinates()).toEqual(expected);
  });

  it('positions the default tooltip above the trigger without changing layout width', () => {
    component.show();
    fixture.detectChanges();

    const tooltip = fixture.nativeElement.querySelector('[role="tooltip"]') as HTMLElement;
    expect(component.coordinates()).toEqual({ left: 120, top: 70 });
    expect(tooltip.style.left).toBe('120px');
    expect(tooltip.style.top).toBe('70px');
  });

  it('hides the tooltip when the viewport moves', () => {
    component.show();
    component.handleViewportChange();
    expect(component.visible()).toBe(false);
  });
});
