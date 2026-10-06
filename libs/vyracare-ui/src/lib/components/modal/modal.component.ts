import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';

import type { VcModalRole } from './model/modal.model';

/** Accessible modal surface with standardized header, body and footer spacing. */
@Component({
  selector: 'vc-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcModalComponent implements AfterViewInit, OnDestroy {
  /** Semantic role used by assistive technology. */
  @Input() role: VcModalRole = 'dialog';
  /** Id of the projected element that labels the modal. */
  @Input() labelledBy = '';
  /** Optional id of the projected element that describes the modal. */
  @Input() describedBy = '';
  /** Allows dismissal when the user clicks outside the surface. */
  @Input() closeOnBackdrop = true;
  /** Allows dismissal when the user presses Escape. */
  @Input() closeOnEscape = true;
  /** Requests that the consumer close the modal. */
  @Output() dismissed = new EventEmitter<void>();

  @ViewChild('surface', { static: true }) private readonly surface?: ElementRef<HTMLElement>;

  private previousFocus: HTMLElement | null = null;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  /** Moves focus into the dialog when it is attached to the page. */
  ngAfterViewInit(): void {
    this.previousFocus = this.document.activeElement as HTMLElement | null;
    this.surface?.nativeElement.focus();
  }

  /** Restores focus to the element used to open the modal. */
  ngOnDestroy(): void {
    this.previousFocus?.focus();
  }

  /** Dismisses only when the backdrop itself, rather than modal content, was clicked. */
  requestBackdropClose(event: MouseEvent): void {
    if (this.closeOnBackdrop && event.target === event.currentTarget) {
      this.dismissed.emit();
    }
  }

  /** Provides the expected keyboard dismissal behavior for dialogs. */
  @HostListener('document:keydown.escape')
  requestEscapeClose(): void {
    if (this.closeOnEscape) {
      this.dismissed.emit();
    }
  }
}
