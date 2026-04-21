import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPageComponent } from './card-page.component';

describe('CardPageComponent', () => {
  let fixture: ComponentFixture<CardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardPageComponent);
    fixture.detectChanges();
  });

  it('renders card examples and metric blocks', () => {
    const text = fixture.nativeElement.textContent;
    const cards = fixture.nativeElement.querySelectorAll('vc-card');

    expect(text).toContain('Card');
    expect(text).toContain('Atendimentos');
    expect(cards.length).toBe(3);
  });
});
