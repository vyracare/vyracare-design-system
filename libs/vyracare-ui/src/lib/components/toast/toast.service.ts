import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy, signal } from '@angular/core';

import type { VcToast, VcToastEventDetail, VcToastOptions, VcToastVariant } from './model/toast.model';

const TOAST_EVENT = 'vyracare:toast';
const DEFAULT_DURATION = 5000;

/**
 * Centralizes transient feedback and synchronizes it between the shell and MFEs.
 * A browser event keeps the state global even when Module Federation loads more
 * than one physical instance of the Design System package.
 */
@Injectable({ providedIn: 'root' })
export class VcToastService implements OnDestroy {
  private readonly toastState = signal<VcToast[]>([]);
  private readonly timers = new Map<string, ReturnType<typeof setTimeout>>();
  private readonly browserWindow: Window | null;
  private sequence = 0;

  /** Read-only toast collection consumed by the floating container. */
  readonly toasts = this.toastState.asReadonly();

  constructor(@Inject(DOCUMENT) document: Document) {
    this.browserWindow = document.defaultView;
    this.browserWindow?.addEventListener(TOAST_EVENT, this.handleGlobalEvent as EventListener);
  }

  /** Publishes a toast and returns its generated identifier. */
  show(options: VcToastOptions): string {
    const toast: VcToast = {
      id: this.createId(),
      title: options.title,
      message: options.message,
      variant: options.variant ?? 'info',
      duration: options.duration ?? DEFAULT_DURATION
    };
    this.publish({ action: 'show', toast });
    return toast.id;
  }

  /** Publishes positive feedback. */
  success(title: string, message?: string, duration?: number): string {
    return this.show({ title, message, duration, variant: 'success' });
  }

  /** Publishes error feedback. */
  error(title: string, message?: string, duration?: number): string {
    return this.show({ title, message, duration, variant: 'error' });
  }

  /** Publishes attention feedback. */
  warning(title: string, message?: string, duration?: number): string {
    return this.show({ title, message, duration, variant: 'warning' });
  }

  /** Publishes neutral information. */
  info(title: string, message?: string, duration?: number): string {
    return this.show({ title, message, duration, variant: 'info' });
  }

  /** Removes a toast from every Design System state instance on the page. */
  dismiss(id: string): void {
    this.publish({ action: 'dismiss', id });
  }

  /** Removes every visible toast. */
  clear(): void {
    this.publish({ action: 'clear' });
  }

  /** Releases the browser listener and pending dismissal timers. */
  ngOnDestroy(): void {
    this.browserWindow?.removeEventListener(TOAST_EVENT, this.handleGlobalEvent as EventListener);
    this.clearTimers();
  }

  /** Broadcasts state changes globally, with an SSR-safe local fallback. */
  private publish(detail: VcToastEventDetail): void {
    if (this.browserWindow) {
      this.browserWindow.dispatchEvent(new CustomEvent<VcToastEventDetail>(TOAST_EVENT, { detail }));
      return;
    }
    this.applyEvent(detail);
  }

  /** Converts browser events into deterministic state transitions. */
  private readonly handleGlobalEvent = (event: CustomEvent<VcToastEventDetail>): void => {
    this.applyEvent(event.detail);
  };

  /** Applies show, dismiss and clear actions to the local signal state. */
  private applyEvent(detail: VcToastEventDetail): void {
    if (detail.action === 'show') {
      this.toastState.update((toasts) => [...toasts.filter((toast) => toast.id !== detail.toast.id), detail.toast]);
      this.scheduleDismiss(detail.toast);
      return;
    }

    if (detail.action === 'dismiss') {
      this.cancelTimer(detail.id);
      this.toastState.update((toasts) => toasts.filter((toast) => toast.id !== detail.id));
      return;
    }

    this.clearTimers();
    this.toastState.set([]);
  }

  /** Schedules automatic removal when the message is not persistent. */
  private scheduleDismiss(toast: VcToast): void {
    this.cancelTimer(toast.id);
    if (toast.duration <= 0) return;
    this.timers.set(toast.id, setTimeout(() => this.dismiss(toast.id), toast.duration));
  }

  /** Cancels one scheduled dismissal. */
  private cancelTimer(id: string): void {
    const timer = this.timers.get(id);
    if (timer) clearTimeout(timer);
    this.timers.delete(id);
  }

  /** Cancels every scheduled dismissal. */
  private clearTimers(): void {
    for (const timer of this.timers.values()) clearTimeout(timer);
    this.timers.clear();
  }

  /** Generates identifiers without requiring a browser crypto implementation. */
  private createId(): string {
    this.sequence += 1;
    return `vc-toast-${Date.now()}-${this.sequence}`;
  }
}
