/** Action item rendered inside a sidebar group. */
export type VcSidebarItem = {
  /** Stable identifier used for selection and active state. */
  id: string;
  /** Visual label shown to the user. */
  label: string;
  /** Optional Bootstrap Icons name shown before the label. */
  icon?: string;
  /** Initial active visual state. */
  active?: boolean;
};

/** Labeled group of items rendered by the sidebar component. */
export type VcSidebarGroup = {
  /** Group label shown above its actions. */
  label: string;
  /** Collection of actions rendered inside the group. */
  items: VcSidebarItem[];
};

/** Support card content rendered at the bottom of the sidebar. */
export type VcSidebarSupport = {
  /** Support card title. */
  title: string;
  /** Support card supporting text. */
  description: string;
  /** Support link label. */
  linkLabel: string;
  /** Support link URL. */
  linkHref: string;
};
