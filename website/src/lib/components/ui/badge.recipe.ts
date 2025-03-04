import {tv, type VariantProps} from 'tailwind-variants';

export const badgeRecipe = tv({
  base: 'inline-block rounded-full',
  variants: {
    variant: {
      outline: 'font-semibold border',
    },
    colorScheme: {
      primary:
        'border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-800/50',
      warning:
        'border-amber-200 text-amber-700 dark:text-amber-400 bg-amber-50 dark:border-amber-800 dark:bg-amber-800/50',
    },
    size: {
      md: 'px-1.5 py-px text-xs',
    },
  },
  defaultVariants: {
    variant: 'outline',
    colorScheme: 'primary',
    size: 'md',
  },
});

export type BadgeRecipeProps = VariantProps<typeof badgeRecipe>;
