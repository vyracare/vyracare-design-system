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
    expect(cards.length).toBe(4);
  });

  it('renders component links', () => {
    const anchors = fixture.nativeElement.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
    const links = Array.from(anchors).map((link) => link.getAttribute('href'));

    expect(links).toEqual(
      ['/componentes/button', '/componentes/card-button', '/componentes/card', '/componentes/list']
    );
  });

  it('renders component titles', () => {
    const content = fixture.nativeElement.textContent;

    expect(content).toContain('Button');
    expect(content).toContain('Card Button');
    expect(content).toContain('Card');
    expect(content).toContain('List');
  });
});
