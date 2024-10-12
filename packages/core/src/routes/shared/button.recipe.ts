import {tv, type VariantProps} from 'tailwind-variants';

export const buttonRecipe = tv({
  base: [
    'h-12',
    'min-w-12',
    'px-4',
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
      outline: 'border',
      solid: 'bg-neutral-300 text-neutral-700',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
});

export type ButtonRecipeProps = VariantProps<typeof buttonRecipe>;
