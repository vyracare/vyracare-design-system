/** Notification item rendered by the notifications dropdown component. */
export type VcNotificationItem = {
  /** Stable identifier used by click handlers and rendering loops. */
  id: string;
  /** Main title shown for the notification. */
  title: string;
  /** Supporting message shown below the notification title. */
  description: string;
  /** Optional timestamp or supporting meta shown beside the content. */
  time?: string;
};
