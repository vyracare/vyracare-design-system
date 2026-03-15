import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcCardComponent } from './card.component';

describe('VcCardComponent', () => {
  let fixture: ComponentFixture<VcCardComponent>;
  let component: VcCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcCardComponent);
    component = fixture.componentInstance;
  });

  it('renders title and subtitle', () => {
    component.title = 'Ficha inicial';
    component.subtitle = 'Primeiro atendimento';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.vc-card__title');
    const subtitle = fixture.nativeElement.querySelector('.vc-card__eyebrow');
    expect(title.textContent).toContain('Ficha inicial');
    expect(subtitle.textContent).toContain('Primeiro atendimento');
  });

  it('applies primary variant class', () => {
    component.variant = 'primary';
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('.vc-card');
    expect(card.classList.contains('vc-card--primary')).toBe(true);
  });
});
