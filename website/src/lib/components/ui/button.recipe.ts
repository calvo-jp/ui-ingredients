import {tv, type VariantProps} from 'tailwind-variants';

export const buttonRecipe = tv({
  base: 'shrink-0 flex items-center justify-center gap-2 rounded font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    size: {
      xs: 'h-10 min-w-11 px-3',
      sm: 'h-11 min-w-11 px-3.5',
      md: 'h-12 min-w-12 px-4',
    },
    variant: {
      outline:
        'border border-neutral-200 bg-white dark:bg-transparent dark:border-neutral-700 ui-selected:border-indigo-500 dark:ui-selected:border-indigo-500 ui-selected:bg-indigo-300/15 ui-selected:text-indigo-500 dark:ui-selected:bg-indigo-500/15 dark:ui-selected:text-indigo-200',
      solid:
        'bg-neutral-800 text-neutral-100 dark:bg-neutral-300 dark:text-neutral-700',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
});

export type ButtonRecipeProps = VariantProps<typeof buttonRecipe>;
