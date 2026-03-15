import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcHeadingComponent } from './heading.component';

describe('VcHeadingComponent', () => {
  let fixture: ComponentFixture<VcHeadingComponent>;
  let component: VcHeadingComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcHeadingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders heading level', async () => {
    fixture.componentRef.setInput('level', 1);
    fixture.detectChanges();
    await fixture.whenStable();
    const heading = fixture.nativeElement.querySelector('.vc-heading');
    expect(heading).toBeTruthy();
    expect(heading.getAttribute('role')).toBe('heading');
    expect(heading.getAttribute('aria-level')).toBe('1');
    expect(heading.classList.contains('vc-heading--h1')).toBe(true);
  });
});
