import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacingPageComponent } from './spacing-page.component';

describe('SpacingPageComponent', () => {
  let fixture: ComponentFixture<SpacingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacingPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SpacingPageComponent);
    fixture.detectChanges();
  });

  it('renders the spacing token scale', () => {
    const text = fixture.nativeElement.textContent;
    const cards = fixture.nativeElement.querySelectorAll('.space-card');

    expect(text).toContain('Espacamento');
    expect(cards.length).toBe(fixture.componentInstance.spaces.length);
  });
});
