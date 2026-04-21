import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('renders brand title', () => {
    const brand = fixture.nativeElement.querySelector('.playground__brand');
    expect(brand?.textContent).toContain('Vyracare');
  });

  it('toggles theme on click', () => {
    const root = document.documentElement;
    root.removeAttribute('data-theme');

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.playground__theme-toggle');
    button.click();
    fixture.detectChanges();
    expect(root.getAttribute('data-theme')).toBe('dark');

    button.click();
    fixture.detectChanges();
    expect(root.hasAttribute('data-theme')).toBe(false);
  });

  it('toggles the components dropdown menu', () => {
    const component = fixture.componentInstance;

    expect(component.componentsMenuOpen()).toBe(true);
    component.toggleComponentsMenu();
    expect(component.componentsMenuOpen()).toBe(false);
    component.toggleComponentsMenu();
    expect(component.componentsMenuOpen()).toBe(true);
  });
});
