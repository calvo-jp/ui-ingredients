import { tv, type VariantProps } from 'tailwind-variants';

export const iconButtonRecipe = tv({
  base: 'size-12 shrink-0 flex items-center justify-center gap-2 rounded font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      outline:
        'border border-neutral-200 bg-white dark:bg-transparent dark:border-neutral-700 ui-pressed:bg-neutral-100/75 dark:ui-pressed:bg-neutral-700/25',
      solid: 'bg-neutral-300',
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});

export type IconButtonRecipeProps = VariantProps<typeof iconButtonRecipe>;
