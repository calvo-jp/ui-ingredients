import {tv, type VariantProps} from 'tailwind-variants';

export const iconButtonRecipe = tv({
  base: [
    'size-12',
    'shrink-0',
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'rounded',
    'font-semibold',
    'transition-colors',
    'duration-200',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  variants: {
    variant: {
      outline:
        'border border-neutral-700 aria-pressed:bg-neutral-700/25 aria-page:border-indigo-500 aria-page:bg-indigo-500/15 aria-page:text-indigo-200',
      solid: 'bg-neutral-300',
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});

export type IconButtonRecipeProps = VariantProps<typeof iconButtonRecipe>;
