import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VcIconButtonComponent } from '../icon-button/icon-button.component';
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

  it('emits a search submit event', () => {
    const searchSubmitSpy = jest.fn();
    component.searchSubmitted.subscribe(searchSubmitSpy);

    component.handleSearchKeydown({ key: 'Enter', target: { value: 'agenda' } } as unknown as KeyboardEvent);

    expect(searchSubmitSpy).toHaveBeenCalledWith('agenda');
  });

  it('renders and selects autocomplete suggestions', () => {
    const suggestion = { id: 'patients', label: 'Pacientes', description: 'Abrir lista', icon: 'people' };
    const suggestionSpy = jest.fn();
    component.searchSuggestions = [suggestion];
    component.searchSuggestionSelected.subscribe(suggestionSpy);
    component.openSearchSuggestions();
    fixture.detectChanges();

    const option = fixture.nativeElement.querySelector('.vc-navbar__search-suggestion') as HTMLButtonElement;
    expect(option.textContent).toContain('Pacientes');

    option.click();

    expect(suggestionSpy).toHaveBeenCalledWith(suggestion);
    expect(component.searchSuggestionsOpen).toBe(false);
  });

  it('supports keyboard navigation without replacing a plain Enter search', () => {
    const suggestion = { id: 'agenda', label: 'Agenda' };
    const suggestionSpy = jest.fn();
    const submitSpy = jest.fn();
    component.searchSuggestions = [suggestion];
    component.searchSuggestionSelected.subscribe(suggestionSpy);
    component.searchSubmitted.subscribe(submitSpy);

    component.handleSearchKeydown({ key: 'Enter', target: { value: 'age' } } as unknown as KeyboardEvent);
    expect(submitSpy).toHaveBeenCalledWith('age');

    component.openSearchSuggestions();
    component.handleSearchKeydown({ key: 'ArrowDown', preventDefault: jest.fn() } as unknown as KeyboardEvent);
    component.handleSearchKeydown({ key: 'Enter', preventDefault: jest.fn() } as unknown as KeyboardEvent);

    expect(suggestionSpy).toHaveBeenCalledWith(suggestion);
  });

  it('wraps keyboard navigation and dismisses autocomplete with Escape', () => {
    component.searchSuggestions = [
      { id: 'agenda', label: 'Agenda' },
      { id: 'patients', label: 'Pacientes' }
    ];
    const preventDefault = jest.fn();

    component.openSearchSuggestions();
    component.handleSearchKeydown({ key: 'ArrowUp', preventDefault } as unknown as KeyboardEvent);
    expect(component.activeSuggestionIndex()).toBe(1);

    component.handleSearchKeydown({ key: 'ArrowDown', preventDefault } as unknown as KeyboardEvent);
    expect(component.activeSuggestionIndex()).toBe(0);

    component.handleSearchKeydown({ key: 'Escape' } as KeyboardEvent);
    expect(component.searchFocused()).toBe(false);
    expect(component.activeSuggestionIndex()).toBe(-1);
  });

  it('ignores navigation keys when there are no suggestions', () => {
    const preventDefault = jest.fn();

    component.handleSearchKeydown({ key: 'ArrowDown', preventDefault } as unknown as KeyboardEvent);
    component.handleSearchKeydown({ key: 'Tab' } as KeyboardEvent);

    expect(preventDefault).not.toHaveBeenCalled();
    expect(component.searchSuggestionsOpen).toBe(false);
  });

  it('emits logo click when the logo is interactive', () => {
    const logoSpy = jest.fn();
    component.logoClickable = true;
    component.logoClicked.subscribe(logoSpy);

    component.handleLogoClick();

    expect(logoSpy).toHaveBeenCalled();
  });

  it('ignores logo click when the logo is not interactive', () => {
    const logoSpy = jest.fn();
    component.logoClicked.subscribe(logoSpy);

    component.handleLogoClick();

    expect(logoSpy).not.toHaveBeenCalled();
  });

  it('toggles the profile dropdown', () => {
    component.toggleProfileMenu(new MouseEvent('click'));
    expect(component.profileMenuOpen()).toBe(true);

    component.closeMenus();
    expect(component.profileMenuOpen()).toBe(false);
  });

  it('keeps notification and profile actions visually balanced', () => {
    fixture.detectChanges();
    const actions = fixture.debugElement
      .queryAll(By.directive(VcIconButtonComponent))
      .map((element) => element.componentInstance as VcIconButtonComponent);

    expect(actions).toHaveLength(2);
    expect(actions.every((action) => action.size === 'md')).toBe(true);
    expect(actions.every((action) => action.variant === 'soft')).toBe(true);
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
