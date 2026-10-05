/** Visual variants supported by the global toast system. */
export type VcToastVariant = 'success' | 'error' | 'warning' | 'info';

/** Message displayed by the global toast container. */
export interface VcToast {
  /** Stable identifier used to dismiss and track the toast. */
  id: string;
  /** Short heading that summarizes the feedback. */
  title: string;
  /** Optional supporting description. */
  message?: string;
  /** Semantic appearance and accessibility meaning. */
  variant: VcToastVariant;
  /** Time in milliseconds before automatic dismissal. Zero keeps it visible. */
  duration: number;
}

/** Input accepted by the toast service. */
export interface VcToastOptions {
  title: string;
  message?: string;
  variant?: VcToastVariant;
  duration?: number;
}

/** Payload exchanged between independently loaded microfrontends. */
export type VcToastEventDetail =
  | { action: 'show'; toast: VcToast }
  | { action: 'dismiss'; id: string }
  | { action: 'clear' };
