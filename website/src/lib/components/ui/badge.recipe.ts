import {tv, type VariantProps} from 'tailwind-variants';

export const badgeRecipe = tv({
  base: 'inline-block rounded-full border border-neutral-200 bg-neutral-50 px-1.5 py-px text-xs font-semibold dark:border-neutral-800 dark:bg-neutral-800/50',
});

export type BadgeRecipeProps = VariantProps<typeof badgeRecipe>;
