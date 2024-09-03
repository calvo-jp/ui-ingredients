import {tv, type VariantProps} from 'tailwind-variants';

export const inputRecipe = tv({
  base: [
    'block',
    'h-12',
    'w-full',
    'px-4',
    'rounded',
    'placeholder:text-neutral-600',
  ],
  variants: {
    variant: {
      outline: [
        'border',
        'bg-transparent',
        'data-invalid:border-danger',
        'data-invalid:focus:outline',
        'data-invalid:focus:outline-1',
        'data-invalid:focus:outline-danger',
      ],
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});

export type InputRecipeProps = VariantProps<typeof inputRecipe>;
