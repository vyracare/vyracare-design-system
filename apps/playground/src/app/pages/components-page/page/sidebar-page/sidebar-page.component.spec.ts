import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPageComponent } from './sidebar-page.component';

describe('SidebarPageComponent', () => {
  let fixture: ComponentFixture<SidebarPageComponent>;
  let component: SidebarPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the sidebar preview', () => {
    expect(fixture.nativeElement.textContent).toContain('Sidebar');
    expect(fixture.nativeElement.querySelector('vc-sidebar')).not.toBeNull();
  });

  it('updates the selected item label', () => {
    component.handleSelection(component.groups[1].items[0]);
    expect(component.selectedItemId).toBe('financeiro');
    expect(component.selectedItemLabel).toBe('Financeiro');
  });
});
