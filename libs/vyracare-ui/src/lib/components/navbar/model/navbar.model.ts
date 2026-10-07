/** Action rendered in the navbar profile dropdown. */
export type VcNavbarAction = {
  /** Stable identifier emitted when the action is selected. */
  id: string;
  /** Label shown in the dropdown item. */
  label: string;
};

/** Search destination rendered in the navbar autocomplete. */
export type VcNavbarSearchSuggestion = {
  /** Stable identifier emitted when the suggestion is selected. */
  id: string;
  /** Primary suggestion label. */
  label: string;
  /** Optional context shown below the label. */
  description?: string;
  /** Optional Bootstrap Icon name displayed before the content. */
  icon?: string;
};
