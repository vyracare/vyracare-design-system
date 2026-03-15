import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPageComponent } from './components-page.component';

describe('ComponentsPageComponent', () => {
  let fixture: ComponentFixture<ComponentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentsPageComponent);
    fixture.detectChanges();
  });

  it('renders button variants', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThanOrEqual(4);
  });

  it('renders cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('vc-card');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });

  it('renders card buttons and list', () => {
    const cardButtons = fixture.nativeElement.querySelectorAll('vc-card-button');
    const list = fixture.nativeElement.querySelector('vc-list');

    expect(cardButtons.length).toBeGreaterThanOrEqual(1);
    expect(list).toBeTruthy();
  });
});
