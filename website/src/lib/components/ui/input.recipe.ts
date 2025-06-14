import {tv, type VariantProps} from 'tailwind-variants';

export const inputRecipe = tv({
  base: 'block w-full rounded placeholder:text-neutral-500',
  variants: {
    size: {
      xs: 'px-3 h-10',
      sm: 'px-3.5 h-11',
      md: 'px-4 h-12',
    },
    variant: {
      outline:
        'border border-neutral-200 bg-white dark:bg-transparent ui-invalid:focus:outline-red-400 ui-invalid:border-red-400 ui-invalid:focus:outline-1 dark:ui-invalid:border-red-400 dark:border-neutral-700',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});

export type InputRecipeProps = VariantProps<typeof inputRecipe>;
