import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPageComponent } from './button-page.component';

describe('ButtonPageComponent', () => {
  let fixture: ComponentFixture<ButtonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPageComponent);
    fixture.detectChanges();
  });

  it('renders button examples', () => {
    const text = fixture.nativeElement.textContent;
    const buttons = fixture.nativeElement.querySelectorAll('vc-button');

    expect(text).toContain('Button');
    expect(text).toContain('Full width');
    expect(buttons.length).toBeGreaterThanOrEqual(7);
  });

  it('keeps loading example enabled for documentation', () => {
    expect(fixture.componentInstance.loading).toBe(true);
  });
});
