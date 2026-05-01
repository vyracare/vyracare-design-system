import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ComponentsPageComponent } from './components-page.component';

describe('ComponentsPageComponent', () => {
  let fixture: ComponentFixture<ComponentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsPageComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentsPageComponent);
    fixture.detectChanges();
  });

  it('renders component navigation cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('vc-card');
    expect(cards.length).toBe(9);
  });

  it('renders component links', () => {
    const anchors = fixture.nativeElement.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
    const links = Array.from(anchors).map((link) => link.getAttribute('href'));

    expect(links).toEqual(
      [
        '/componentes/avatar',
        '/componentes/button',
        '/componentes/card-button',
        '/componentes/card',
        '/componentes/icon-button',
        '/componentes/list',
        '/componentes/navbar',
        '/componentes/notifications',
        '/componentes/sidebar'
      ]
    );
  });

  it('renders component titles', () => {
    const content = fixture.nativeElement.textContent;

    expect(content).toContain('Avatar');
    expect(content).toContain('Button');
    expect(content).toContain('Card Button');
    expect(content).toContain('Card');
    expect(content).toContain('Icon Button');
    expect(content).toContain('List');
    expect(content).toContain('Navbar');
    expect(content).toContain('Notifications');
    expect(content).toContain('Sidebar');
  });
});
