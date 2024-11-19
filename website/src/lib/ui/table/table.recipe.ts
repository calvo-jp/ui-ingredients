import {tv, type VariantProps} from 'tailwind-variants';

export const tableRecipe = tv({
  slots: {
    root: 'w-full',
    header: '',
    body: '',
    footer: '',
    row: '',
    cell: '',
    heading: '',
  },
  variants: {
    variant: {
      bordered: {
        body: '[&_tr:last-of-type]:border-b-0 [&_tr:first-of-type]:border-t',
        header: '[&_tr:first-of-type]:border-b-0',
        footer: '[&_tr:first-of-type]:border-t [&_tr:last-of-type]:border-b-0',
        heading:
          'px-4 py-3 text-left text-sm whitespace-nowrap font-semibold bg-neutral-50 dark:bg-neutral-800/25',
        cell: 'px-4 py-3 text-left text-sm',
        row: 'border-b border-neutral-200 dark:border-neutral-800',
      },
    },
  },
  defaultVariants: {
    variant: 'bordered',
  },
});

export type TableRecipeProps = VariantProps<typeof tableRecipe>;
