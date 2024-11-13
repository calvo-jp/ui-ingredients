import {tv} from 'tailwind-variants';

export const tableRecipe = tv({
  slots: {
    root: 'border border-neutral-800 w-full',
    header: null,
    body: null,
    footer: null,
    row: null,
    heading:
      'text-sm px-4 py-3 bg-neutral-800/25 text-left border border-neutral-800 font-medium',
    cell: 'text-sm px-4 text-neutral-300 py-3 text-left border border-neutral-800',
  },
});
