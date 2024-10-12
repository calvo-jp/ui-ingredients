<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateFieldProps,
    CreateFieldReturn,
  } from './create-field.svelte.js';

  export interface FieldProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateFieldReturn>,
      CreateFieldProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createField} from './create-field.svelte.js';
  import {setFieldContext} from './field-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FieldProps = $props();

  let [createFieldProps, localProps] = $derived(
    createSplitProps<CreateFieldProps>([
      'id',
      'ids',
      'invalid',
      'disabled',
      'readOnly',
      'required',
    ])(props),
  );

  let field = createField(reflect(() => createFieldProps));

  let mergedProps = $derived(mergeProps(field.getRootProps(), localProps));

  setFieldContext(field);
</script>

{#if asChild}
  {@render asChild(mergedProps, field)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(field)}
  </div>
{/if}
