import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcNotificationsComponent } from './notifications.component';

describe('VcNotificationsComponent', () => {
  let fixture: ComponentFixture<VcNotificationsComponent>;
  let component: VcNotificationsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcNotificationsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcNotificationsComponent);
    component = fixture.componentInstance;
    component.items = [
      { id: '1', title: 'Agenda', description: '8 atendimentos confirmados.' },
      { id: '2', title: 'Financeiro', description: '3 boletos aguardando confirmacao.' }
    ];
  });

  it('renders the badge count from the notifications list', () => {
    fixture.detectChanges();

    const badge: HTMLElement | null = fixture.nativeElement.querySelector('.vc-notifications__badge');
    expect(badge?.textContent?.trim()).toBe('2');
  });

  it('toggles the panel when the trigger is used', () => {
    fixture.detectChanges();

    component.togglePanel(new MouseEvent('click'));
    expect(component.open()).toBe(true);

    component.closePanel();
    expect(component.open()).toBe(false);
  });

  it('emits the selected notification and closes the panel', () => {
    const itemSpy = jest.fn();
    component.itemSelected.subscribe(itemSpy);
    component.open.set(true);

    component.selectItem(component.items[0], new MouseEvent('click'));

    expect(itemSpy).toHaveBeenCalledWith(component.items[0]);
    expect(component.open()).toBe(false);
  });

  it('emits the footer action and closes the panel', () => {
    const viewAllSpy = jest.fn();
    component.viewAll.subscribe(viewAllSpy);
    component.open.set(true);

    component.handleViewAll(new MouseEvent('click'));

    expect(viewAllSpy).toHaveBeenCalled();
    expect(component.open()).toBe(false);
  });
});
