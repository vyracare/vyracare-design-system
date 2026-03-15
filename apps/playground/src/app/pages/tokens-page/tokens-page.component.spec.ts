import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensPageComponent } from './tokens-page.component';

describe('TokensPageComponent', () => {
  let fixture: ComponentFixture<TokensPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokensPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TokensPageComponent);
    fixture.detectChanges();
  });

  it('renders token sections', () => {
    const sections = fixture.nativeElement.querySelectorAll('.tokens__section');
    expect(sections.length).toBeGreaterThan(0);
  });

  it('maps css token values', () => {
    const component = fixture.componentInstance;
    expect(component.values.size).toBeGreaterThan(0);
  });
});
