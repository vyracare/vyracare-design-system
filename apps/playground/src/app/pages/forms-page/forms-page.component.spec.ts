import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPageComponent } from './forms-page.component';

describe('FormsPageComponent', () => {
  let fixture: ComponentFixture<FormsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormsPageComponent);
    fixture.detectChanges();
  });

  it('renders form inputs', () => {
    const inputs = fixture.nativeElement.querySelectorAll('input');
    expect(inputs.length).toBeGreaterThanOrEqual(5);
  });

  it('renders dropdown and search', () => {
    const select = fixture.nativeElement.querySelector('select');
    const search = fixture.nativeElement.querySelector('vc-search');

    expect(select).toBeTruthy();
    expect(search).toBeTruthy();
  });
});
