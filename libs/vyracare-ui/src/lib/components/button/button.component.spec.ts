import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VcButtonComponent } from './button.component';

@Component({
  standalone: true,
  imports: [VcButtonComponent],
  template: '<vc-button [loading]="loading">Salvar</vc-button>'
})
class ButtonHostComponent {
  loading = false;
}

describe('VcButtonComponent', () => {
  let fixture: ComponentFixture<ButtonHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonHostComponent);
    fixture.detectChanges();
  });

  it('renders content', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Salvar');
  });

  it('disables when loading', async () => {
    const host = fixture.componentInstance;
    host.loading = true;
    fixture.detectChanges();
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });

  it('applies full width class when full is true', () => {
    const debugElement = fixture.debugElement.query(By.directive(VcButtonComponent));
    debugElement.componentInstance.full = true;
    fixture.detectChanges();

    expect(debugElement.nativeElement.classList).toContain('vc-button--full');
  });
});
