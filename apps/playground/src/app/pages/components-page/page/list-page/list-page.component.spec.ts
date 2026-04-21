import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';

describe('ListPageComponent', () => {
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPageComponent);
    fixture.detectChanges();
  });

  it('renders list documentation and examples', () => {
    const text = fixture.nativeElement.textContent;
    const list = fixture.nativeElement.querySelector('vc-list');

    expect(text).toContain('List');
    expect(list).toBeTruthy();
    expect(fixture.componentInstance.listItems).toHaveLength(3);
  });
});
