import type {SvelteHTMLElements} from 'svelte/elements';
import {parts} from './table-anatomy';
import {tableRecipe, type TableRecipeProps} from './table.recipe';

export interface CreateTableReturn {
  getRootProps(): SvelteHTMLElements['table'];
  getHeaderProps(): SvelteHTMLElements['thead'];
  getBodyProps(): SvelteHTMLElements['tbody'];
  getFooterProps(): SvelteHTMLElements['tfoot'];
  getRowProps(): SvelteHTMLElements['tr'];
  getCellProps(): SvelteHTMLElements['td'];
  getHeadingProps(): SvelteHTMLElements['th'];
}

export interface CreateTableProps extends TableRecipeProps {}

export function createTable(props: CreateTableProps): CreateTableReturn {
  const styles = $derived(tableRecipe(props));

  return {
    getRootProps() {
      return {
        cellpadding: 0,
        cellspacing: 0,
        class: styles.root(),
        ...parts.root.attrs,
      };
    },
    getHeaderProps() {
      return {
        class: styles.header(),
        ...parts.header.attrs,
      };
    },
    getBodyProps() {
      return {
        class: styles.body(),
        ...parts.body.attrs,
      };
    },
    getFooterProps() {
      return {
        class: styles.footer(),
        ...parts.footer.attrs,
      };
    },
    getRowProps() {
      return {
        class: styles.row(),
        ...parts.row.attrs,
      };
    },
    getCellProps() {
      return {
        class: styles.cell(),
        ...parts.cell.attrs,
      };
    },
    getHeadingProps() {
      return {
        class: styles.heading(),
        ...parts.heading.attrs,
      };
    },
  };
}
