import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtonPageComponent } from './card-button-page.component';

describe('CardButtonPageComponent', () => {
  let fixture: ComponentFixture<CardButtonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardButtonPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardButtonPageComponent);
    fixture.detectChanges();
  });

  it('renders card-button usage examples', () => {
    const text = fixture.nativeElement.textContent;
    const cardButtons = fixture.nativeElement.querySelectorAll('vc-card-button');

    expect(text).toContain('Card Button');
    expect(cardButtons.length).toBe(3);
  });
});
