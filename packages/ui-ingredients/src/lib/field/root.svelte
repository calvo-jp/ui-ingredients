<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateFieldProps,
    CreateFieldReturn,
  } from './create-field.svelte.js';

  export interface FieldProps
    extends Assign<
      HtmlIngredientProps<'div', CreateFieldReturn>,
      CreateFieldProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setFieldContext} from './context.svelte.js';
  import {createField} from './create-field.svelte.js';

  let {asChild, children, ...props}: FieldProps = $props();

  let [fieldProps, otherProps] = $derived(
    createSplitProps<CreateFieldProps>([
      'id',
      'ids',
      'invalid',
      'disabled',
      'readOnly',
      'required',
    ])(props),
  );

  let field = createField(reflect(() => fieldProps));

  let mergedProps = $derived(mergeProps(otherProps, field.getRootProps()));

  setFieldContext(field);
</script>

{#if asChild}
  {@render asChild(mergedProps, field)}
{:else}
  <div {...mergedProps}>
    {@render children?.(field)}
  </div>
{/if}
