import {tv, type VariantProps} from 'tailwind-variants';

export const inputRecipe = tv({
  base: 'block w-full rounded placeholder:text-neutral-400',
  variants: {
    size: {
      xs: 'px-2.5 h-10',
      sm: 'px-3 h-11',
      md: 'px-4 h-12',
    },
    variant: {
      outline: [
        'border',
        'border-neutral-700',
        'bg-transparent',
        'data-invalid:border-red-500',
        'data-invalid:focus:outline',
        'data-invalid:focus:outline-1',
        'data-invalid:focus:outline-red-500',
      ],
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});

export type InputRecipeProps = VariantProps<typeof inputRecipe>;
