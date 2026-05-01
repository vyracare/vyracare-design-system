import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcIconButtonComponent } from './icon-button.component';

describe('VcIconButtonComponent', () => {
  let fixture: ComponentFixture<VcIconButtonComponent>;
  let component: VcIconButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcIconButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcIconButtonComponent);
    component = fixture.componentInstance;
    component.icon = 'bell';
  });

  it('renders the requested icon', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.bi-bell')).not.toBeNull();
  });

  it('emits action when clicked', () => {
    const actionSpy = jest.fn();
    component.action.subscribe(actionSpy);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();

    expect(actionSpy).toHaveBeenCalled();
  });

  it('does not emit action when disabled', () => {
    const actionSpy = jest.fn();
    component.disabled = true;
    component.action.subscribe(actionSpy);
    fixture.detectChanges();

    component.handleClick(new MouseEvent('click'));

    expect(actionSpy).not.toHaveBeenCalled();
  });

  it('applies the active class when the button is open or selected', () => {
    component.active = true;
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('is-active');
  });
});
