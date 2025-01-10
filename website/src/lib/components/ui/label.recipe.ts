import {tv, type VariantProps} from 'tailwind-variants';

export const labelRecipe = tv({
  base: 'mb-1 block text-sm font-semibold',
});

export type LabelRecipeProps = VariantProps<typeof labelRecipe>;
