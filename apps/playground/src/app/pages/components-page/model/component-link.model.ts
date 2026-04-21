/** Shortcut card shown in the playground components overview. */
export type ComponentLink = {
  /** Component name shown in the shortcut card. */
  title: string;
  /** Short usage description shown below the title. */
  description: string;
  /** Bootstrap Icons name used in the shortcut badge. */
  icon: string;
  /** Router path opened by the shortcut card. */
  path: string;
};
