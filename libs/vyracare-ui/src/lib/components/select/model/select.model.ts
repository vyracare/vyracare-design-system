/** Option contract consumed by the Vyracare select. */
export type VcSelectOption = {
  /** Label shown to users in the select dropdown. */
  label: string;
  /** Value emitted through ControlValueAccessor when selected. */
  value: string;
  /** Disables the option when true. */
  disabled?: boolean;
};
