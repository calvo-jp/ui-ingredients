import {tv, type VariantProps} from 'tailwind-variants';
import {inputRecipe} from './input.recipe.js';

export const textareaRecipe = tv({
  base: 'resize-none',
  variants: {
    size: {
      xs: 'h-auto px-2.5 py-1.5',
      sm: 'h-auto px-3 py-2',
      md: 'h-auto px-4 py-2.5',
    },
  },
  extend: inputRecipe,
});

export type TextareaRecipeProps = VariantProps<typeof textareaRecipe>;
