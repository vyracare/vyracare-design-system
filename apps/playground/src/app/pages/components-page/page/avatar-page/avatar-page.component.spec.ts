import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPageComponent } from './avatar-page.component';

describe('AvatarPageComponent', () => {
  let fixture: ComponentFixture<AvatarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarPageComponent);
    fixture.detectChanges();
  });

  it('renders avatar examples', () => {
    const avatars = fixture.nativeElement.querySelectorAll('vc-avatar');
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Avatar');
    expect(avatars.length).toBeGreaterThanOrEqual(8);
  });
});
