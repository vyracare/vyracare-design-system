/** Navigation item rendered in the playground shell. */
export type PlaygroundLink = {
  /** Router path used by the menu item. */
  path: string;
  /** Text shown in the lateral navigation. */
  label: string;
};

/** Visual themes supported by the playground shell. */
export type PlaygroundTheme = 'light' | 'dark';
