import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcSidebarComponent } from './sidebar.component';

describe('VcSidebarComponent', () => {
  let fixture: ComponentFixture<VcSidebarComponent>;
  let component: VcSidebarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcSidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcSidebarComponent);
    component = fixture.componentInstance;
    component.groups = [
      {
        label: 'Area Clinica',
        items: [
          { id: 'dashboard', label: 'Dashboard', active: true },
          { id: 'agenda', label: 'Agenda' },
          { id: 'finance', label: 'Financeiro', children: [{ id: 'finance/overview', label: 'Visao geral' }] }
        ]
      }
    ];
    component.support = {
      title: 'Precisa de ajuda?',
      description: 'Nossa equipe esta pronta para apoiar sua operacao.',
      linkLabel: 'suporte@vyracare.com',
      linkHref: 'mailto:suporte@vyracare.com'
    };
  });

  it('renders sidebar groups and items', () => {
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('.vc-sidebar__item');
    expect(buttons.length).toBe(3);
    expect(fixture.nativeElement.textContent).toContain('Area Clinica');
  });

  it('expands a parent and emits its selected child', () => {
    const itemSpy = jest.fn();
    component.itemSelected.subscribe(itemSpy);
    const finance = component.groups[0].items[2];
    component.selectItem(finance);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Visao geral');
    component.selectItem(finance.children![0]);
    expect(itemSpy).toHaveBeenCalledWith(finance.children![0]);
  });

  it('keeps the active submenu branch expanded', () => {
    component.activeItemId = 'finance/overview';
    fixture.detectChanges();
    expect(component.isExpanded(component.groups[0].items[2])).toBe(true);
  });

  it('highlights the active item', () => {
    component.activeItemId = 'agenda';
    fixture.detectChanges();

    const activeButtons = fixture.nativeElement.querySelectorAll('.vc-sidebar__item.is-active');
    expect(activeButtons.length).toBe(2);
  });

  it('emits the selected item on click', () => {
    const itemSpy = jest.fn();
    component.itemSelected.subscribe(itemSpy);
    fixture.detectChanges();

    component.selectItem(component.groups[0].items[1]);

    expect(itemSpy).toHaveBeenCalledWith(component.groups[0].items[1]);
  });
});
