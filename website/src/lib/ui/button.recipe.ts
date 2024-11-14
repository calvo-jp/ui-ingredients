import {tv, type VariantProps} from 'tailwind-variants';

export const buttonRecipe = tv({
  base: [
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
    size: {
      sm: 'h-11 min-w-11 px-3.5 text-sm',
      md: 'h-12 min-w-12 px-4',
    },
    variant: {
      outline: 'border border-neutral-700',
      solid: 'bg-neutral-300 text-neutral-700',
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
