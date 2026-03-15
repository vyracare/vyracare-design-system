import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcListComponent, VcListItem } from './list.component';

describe('VcListComponent', () => {
  let fixture: ComponentFixture<VcListComponent>;
  let component: VcListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcListComponent);
    component = fixture.componentInstance;
  });

  it('renders list items', () => {
    const items: VcListItem[] = [
      { title: 'Item 1', description: 'Descricao' },
      { title: 'Item 2', href: '/link' }
    ];
    component.items = items;
    fixture.detectChanges();
    const listItems = fixture.nativeElement.querySelectorAll('.vc-list__item');
    expect(listItems.length).toBe(2);
  });

  it('renders anchor when href is provided', () => {
    component.items = [{ title: 'Link', href: '/teste' }];
    fixture.detectChanges();
    const anchor = fixture.nativeElement.querySelector('a.vc-list__link');
    expect(anchor).toBeTruthy();
  });
});
