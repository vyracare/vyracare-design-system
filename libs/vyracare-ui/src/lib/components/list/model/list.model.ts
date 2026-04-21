/** Item contract consumed by the Vyracare list. */
export type VcListItem = {
  /** Primary text rendered for the item. */
  title: string;
  /** Optional supporting text rendered below the title. */
  description?: string;
  /** Optional href that turns the row into a link. */
  href?: string;
  /** Optional target applied when href is provided. */
  target?: '_self' | '_blank';
  /** Optional Bootstrap Icons name rendered before the content. */
  icon?: string;
};
