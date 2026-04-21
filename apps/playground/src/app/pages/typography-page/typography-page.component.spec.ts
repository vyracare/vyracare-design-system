import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyPageComponent } from './typography-page.component';

describe('TypographyPageComponent', () => {
  let fixture: ComponentFixture<TypographyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypographyPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TypographyPageComponent);
    fixture.detectChanges();
  });

  it('renders typography families, scale and weights', () => {
    const text = fixture.nativeElement.textContent;
    const cards = fixture.nativeElement.querySelectorAll('.type-card');
    const expectedCards =
      fixture.componentInstance.fontFamilies.length +
      fixture.componentInstance.scale.length +
      fixture.componentInstance.weights.length;

    expect(text).toContain('Tipografia');
    expect(cards.length).toBe(expectedCards);
  });
});
