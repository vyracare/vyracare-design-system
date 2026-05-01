import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonPageComponent } from './icon-button-page.component';

describe('IconButtonPageComponent', () => {
  let fixture: ComponentFixture<IconButtonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconButtonPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IconButtonPageComponent);
    fixture.detectChanges();
  });

  it('renders icon button examples', () => {
    const buttons = fixture.nativeElement.querySelectorAll('vc-icon-button');
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Icon Button');
    expect(buttons.length).toBeGreaterThanOrEqual(6);
  });
});
