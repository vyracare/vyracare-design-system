import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcModalComponent } from './modal.component';

@Component({
  standalone: true,
  imports: [VcModalComponent],
  template: `
    <button id="trigger">Abrir</button>
    <vc-modal
      role="alertdialog"
      labelledBy="modal-title"
      describedBy="modal-description"
      (dismissed)="dismissCount = dismissCount + 1"
    >
      <h2 vcModalHeader id="modal-title">Confirmar</h2>
      <p vcModalBody id="modal-description">Deseja continuar?</p>
      <button vcModalFooter>Salvar</button>
    </vc-modal>
  `
})
class ModalHostComponent {
  dismissCount = 0;
}

describe('VcModalComponent', () => {
  let fixture: ComponentFixture<ModalHostComponent>;
  let modal: VcModalComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ModalHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(ModalHostComponent);
    fixture.nativeElement.querySelector('#trigger').focus();
    fixture.detectChanges();
    modal = fixture.debugElement.children[1].componentInstance;
  });

  it('projects semantic regions and focuses the modal surface', () => {
    const surface = fixture.nativeElement.querySelector('.vc-modal');
    expect(surface.getAttribute('role')).toBe('alertdialog');
    expect(surface.getAttribute('aria-labelledby')).toBe('modal-title');
    expect(surface.getAttribute('aria-describedby')).toBe('modal-description');
    expect(fixture.nativeElement.querySelector('.vc-modal__header').textContent).toContain('Confirmar');
    expect(fixture.nativeElement.querySelector('.vc-modal__body').textContent).toContain('Deseja continuar?');
    expect(fixture.nativeElement.querySelector('.vc-modal__footer').textContent).toContain('Salvar');
    expect(document.activeElement).toBe(surface);
  });

  it('dismisses from the backdrop and Escape when enabled', () => {
    const backdrop = fixture.nativeElement.querySelector('.vc-modal__backdrop');
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    modal.requestEscapeClose();
    expect(fixture.componentInstance.dismissCount).toBe(2);
  });

  it('keeps the modal open for content clicks and disabled dismissal options', () => {
    const surface = fixture.nativeElement.querySelector('.vc-modal');
    surface.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    modal.closeOnBackdrop = false;
    fixture.nativeElement.querySelector('.vc-modal__backdrop').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    modal.closeOnEscape = false;
    modal.requestEscapeClose();
    expect(fixture.componentInstance.dismissCount).toBe(0);
  });

  it('restores focus when destroyed', () => {
    const trigger = fixture.nativeElement.querySelector('#trigger') as HTMLButtonElement;
    modal.ngOnDestroy();
    expect(document.activeElement).toBe(trigger);
  });
});
