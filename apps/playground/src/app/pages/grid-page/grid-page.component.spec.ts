import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPageComponent } from './grid-page.component';

describe('GridPageComponent', () => {
  let fixture: ComponentFixture<GridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GridPageComponent);
    fixture.detectChanges();
  });

  it('renders grid boxes', () => {
    const boxes = fixture.nativeElement.querySelectorAll('.grid-box');
    expect(boxes.length).toBeGreaterThanOrEqual(10);
  });
});
