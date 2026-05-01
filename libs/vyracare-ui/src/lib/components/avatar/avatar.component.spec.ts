import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcAvatarComponent } from './avatar.component';

describe('VcAvatarComponent', () => {
  let fixture: ComponentFixture<VcAvatarComponent>;
  let component: VcAvatarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcAvatarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcAvatarComponent);
    component = fixture.componentInstance;
  });

  it('renders explicit initials', () => {
    component.initials = 'VC';
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('VC');
  });

  it('derives initials from the name when initials are not provided', () => {
    component.name = 'Vyra Care';
    fixture.detectChanges();

    expect(component.fallbackInitials).toBe('VC');
  });

  it('renders image when imageUrl is provided', () => {
    component.name = 'Vyra Care';
    component.imageUrl = 'https://example.com/avatar.png';
    fixture.detectChanges();

    const image: HTMLImageElement | null = fixture.nativeElement.querySelector('img');
    expect(image?.src).toContain('https://example.com/avatar.png');
  });

  it('applies size and tone classes to the host', () => {
    component.size = 'xl';
    component.tone = 'cool';
    fixture.detectChanges();

    expect(fixture.nativeElement.classList).toContain('vc-avatar--xl');
    expect(fixture.nativeElement.classList).toContain('vc-avatar--cool');
  });
});
