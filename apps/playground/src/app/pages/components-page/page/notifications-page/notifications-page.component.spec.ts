import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsPageComponent } from './notifications-page.component';

describe('NotificationsPageComponent', () => {
  let fixture: ComponentFixture<NotificationsPageComponent>;
  let component: NotificationsPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the notifications preview', () => {
    expect(fixture.nativeElement.textContent).toContain('Notifications');
    expect(fixture.nativeElement.querySelector('vc-notifications')).not.toBeNull();
  });

  it('updates feedback when a notification is selected', () => {
    component.handleSelection(component.notifications[0]);
    expect(component.lastSelection).toContain('Agenda de hoje');
  });
});
