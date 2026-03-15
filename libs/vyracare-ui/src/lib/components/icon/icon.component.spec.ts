import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcIconComponent } from './icon.component';

describe('VcIconComponent', () => {
  let fixture: ComponentFixture<VcIconComponent>;
  let component: VcIconComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcIconComponent);
    component = fixture.componentInstance;
  });

  it('applies icon class', () => {
    fixture.componentRef.setInput('name', 'alarm');
    fixture.detectChanges();
    const icon = fixture.nativeElement.querySelector('span');
    expect(icon.classList.contains('bi-alarm')).toBe(true);
  });

  it('sets custom size', () => {
    fixture.componentRef.setInput('size', 32);
    fixture.detectChanges();
    expect(component.iconSize).toBe('32px');
  });
});
