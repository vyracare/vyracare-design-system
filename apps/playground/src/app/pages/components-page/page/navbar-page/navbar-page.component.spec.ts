import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPageComponent } from './navbar-page.component';

describe('NavbarPageComponent', () => {
  let fixture: ComponentFixture<NavbarPageComponent>;
  let component: NavbarPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the navbar preview', () => {
    expect(fixture.nativeElement.textContent).toContain('Navbar');
    expect(fixture.nativeElement.querySelector('vc-navbar')).not.toBeNull();
  });

  it('updates the feedback text when events are handled', () => {
    component.handleSearch('pacientes');
    expect(component.lastInteraction).toContain('Busca');

    component.handleSearchSubmit('pacientes');
    expect(component.lastInteraction).toContain('Pesquisa enviada');

    component.handleLogoClick();
    expect(component.lastInteraction).toContain('voltar para a raiz');

    component.handleViewAll();
    expect(component.lastInteraction).toContain('ver todas');
  });
});
