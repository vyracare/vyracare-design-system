import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcNavbarComponent } from './navbar.component';

describe('VcNavbarComponent', () => {
  let fixture: ComponentFixture<VcNavbarComponent>;
  let component: VcNavbarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcNavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcNavbarComponent);
    component = fixture.componentInstance;
    component.notifications = [
      { id: 'agenda', title: 'Agenda', description: '8 atendimentos confirmados.' }
    ];
  });

  it('renders brand and profile data', () => {
    component.profileName = 'Lenin Silva';
    component.profileRole = 'Administrador';
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent;
    expect(content).toContain('Vyra');
    expect(content).toContain('Care');
    expect(content).toContain('Lenin Silva');
  });

  it('emits search changes', () => {
    const searchSpy = jest.fn();
    component.searchChange.subscribe(searchSpy);

    component.handleSearch({ target: { value: 'paciente' } } as unknown as Event);

    expect(searchSpy).toHaveBeenCalledWith('paciente');
  });

  it('toggles the profile dropdown', () => {
    component.toggleProfileMenu(new MouseEvent('click'));
    expect(component.profileMenuOpen()).toBe(true);

    component.closeMenus();
    expect(component.profileMenuOpen()).toBe(false);
  });

  it('emits profile actions and closes the menu', () => {
    const profileSpy = jest.fn();
    component.profileActionSelected.subscribe(profileSpy);
    component.profileMenuOpen.set(true);
    const action = component.profileActions[0];

    component.selectProfileAction(action, new MouseEvent('click'));

    expect(profileSpy).toHaveBeenCalledWith(action);
    expect(component.profileMenuOpen()).toBe(false);
  });
});
